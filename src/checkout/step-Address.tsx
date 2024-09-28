import { CheckoutSteps } from "@/types/checkoutSteps"
import { Dispatch, FocusEvent, SetStateAction } from "react"
import { Controller, useForm } from "react-hook-form"
import { Form, FormControl } from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCheckoutStore } from "@/stores/checkout-store"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Api } from '@/services/api'
import { useTranslation } from "react-i18next"

type Props = {
    setSteps: Dispatch<SetStateAction<CheckoutSteps>>;
}



export const StepAddress = ({ setSteps }: Props) => {

    const { setAddress } = useCheckoutStore(state => state);
    const { t } = useTranslation();

    const formSchema = z.object({
        zipCode: z.string().optional(),
        street: z.string().min(2, `${t("formSchema.rua")}`),
        number: z.string().min(2, `${t("formSchema.numero")}`),
        complement: z.string().min(2, `${t("formSchema.complemento")}`),
        district: z.string().min(2, `${t("formSchema.bairro")}`),
        city: z.string().min(2, `${t("formSchema.cidade")}`)
    })

    const { register, handleSubmit, setValue, setFocus, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    
    const onSubmit = (data: z.infer<typeof formSchema>) => {
        setAddress(data);
        setSteps('finish');
    }


    async function handleCheckedCep(e: FocusEvent<HTMLInputElement>) {
        const cep = e.target.value.replace(/\D/g, '');
        if (cep.length < 8) return;

        try {
            let response = await Api.get(`${cep}/json/`)
            setValue('zipCode', response.data.cep)
            setValue('street', response.data.logradouro)
            setValue('district', response.data.bairro)
            setValue('city', response.data.localidade)
            setFocus('number')    
        } catch {
            alert('CEP Inválido"')
            setValue('zipCode', '')
        }

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="grid grid-cols-2 font-roboto100 gap-2 mt-0">
                <label className='flex flex-col gap-2'>
                    <p>{t("address.cep")}</p>
                    <Input {...register('zipCode')} onBlur={(e) => handleCheckedCep(e)} />
                    <div className="h-6">
                        {errors.zipCode?.message && <p className="text-red-500">{errors.zipCode.message}</p>}
                    </div>
                </label>
                <label className='flex flex-col gap-2'>
                    <p>{t("address.rua")}</p>        
                    <Input {...register('street')} />
                    <div className="h-6">
                        {errors.street?.message && <p className="text-red-500">{errors.street.message}</p>}
                    </div>
                </label>
                <label className='flex flex-col gap-2'>
                    <p>{t("address.numero")}</p>
                    <Input {...register('number')} />
                    <div className="h-6">
                        {errors.number?.message && <p className="text-red-500">{errors.number.message}</p>}
                    </div>
                </label>
                <label className='flex flex-col gap-2'>
                    <p>{t("address.complemento")}</p>
                    <Input placeholder={t("address.placeholder")} {...register('complement')} />
                    <div className="h-6">
                        {errors.complement?.message && <p className="text-red-500">{errors.complement.message}</p>}
                    </div>
                </label>
                <label className='flex flex-col gap-2'>
                    <p>{t("address.bairro")}</p>
                    <Input {...register('district')} />
                    <div className="h-6">
                        {errors.district?.message && <p className="text-red-500">{errors.district.message}</p>}
                    </div>
                </label>
                <label className='flex flex-col gap-2'>
                    <p>{t("address.cidade")}</p>
                    <Input {...register('city')} />
                    <div className="h-6">
                        {errors.city?.message && <p className="text-red-500">{errors.city.message}</p>}
                    </div>
                </label>

            </div>
            <div className="flex justify-between mt-2">
                <Button onClick={() => setSteps("users")} type="submit" variant={"link"}>{t("address.botaoVoltar")}</Button>
                <Button type="submit">{t("address.botaoConcluir")}</Button>
            </div>


        </form>
    )
}