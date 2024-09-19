import { CheckoutSteps } from "@/types/checkoutSteps"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCheckoutStore } from "@/stores/checkout-store"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

type Props = {
    setSteps: Dispatch<SetStateAction<CheckoutSteps>>;
}


export const StepUsers = ({ setSteps }: Props) => {

    const { setPersonData } = useCheckoutStore(state => state);
    const { t } = useTranslation();

    const formSchema = z.object({
        name: z.string().min(2, `${t("formSchema.nome")}`),
        tel: z.string().min(8, `${t("formSchema.tel")}`),
        email: z.string().email(`${t("formSchema.email")}`)
    })

    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        
        setPersonData(values);
        setSteps('address');
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <label className='flex flex-col gap-2'>
                <p>{t("address.telefone")}</p>
                <Input {...register('tel')} />
                <div className="h-6">
                    {errors.tel?.message && <p className="text-red-500">{errors.tel.message}</p>}
                </div>
            </label>
            <label className='flex flex-col gap-2'>
                <p>{t("address.nome")}</p>
                <Input {...register('name')} />
                <div className="h-6">
                    {errors.name?.message && <p className="text-red-500">{errors.name.message}</p>}
                </div>
            </label>
            <label className='flex flex-col gap-2'>
                <p>{t("address.email")}</p>
                <Input {...register('email')} />
                <div className="h-6">
                    {errors.email?.message && <p className="text-red-500">{errors.email.message}</p>}
                </div>
            </label>
            <Button type="submit" >Próximo</Button>
        </form>

    )
}