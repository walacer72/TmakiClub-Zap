import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckoutSteps } from "@/types/checkoutSteps";
import { useState } from "react";
import { StepUsers } from "./step-Users";
import { StepAddress } from "./step-Address";
import { StepFinish } from "./Step-Finish";
import { useTranslation } from "react-i18next";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}


export const RegisterForm = ({ open, onOpenChange }: Props) => {

    const [steps, setSteps] = useState<CheckoutSteps>('users')
    const { t } = useTranslation();

    let progressPct = 0;

    switch (steps) {
        case 'users': {
            progressPct = 33;
            break;
        }
        case 'address': {
            progressPct = 66;
            break;
        }
        case 'finish': {
            progressPct = 100;
            break;
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-full font-roboto100 h-auto max-w-2xl p-8">
                <div className="w-full h-44 relative flex justify-center overflow-hidden">
                    <img className="w-full h-full object-cover opacity-50" src="./images/tmaki-cabeçalho.webp" alt="" />
                    <h1 className="absolute top-16 text-4xl text-secondary-foreground">Tmaki Club</h1>
                </div>
                <div className="flex flex-col md:flex-row md:gap-5">
                    {steps === "users"}
                    <div className="flex-1 flex flex-col">
                        <DialogHeader>
                            <DialogTitle className="text-center my-4 mb-10 text-xl">
                                {steps === 'users' && <p>{t("address.dados")}</p>}
                                {steps === 'address' && <p>{t("address.endereco")}</p>}
                                {steps === 'finish' && <p>{t("address.envio")}</p>}
                            </DialogTitle>
                            <div className="h-96">
                                {steps === 'users' && <StepUsers setSteps={setSteps} />}
                                {steps === 'address' && <StepAddress setSteps={setSteps} />}
                                {steps === 'finish' && <StepFinish setSteps={setSteps} />}
                            </div>
                        </DialogHeader>

                    </div>

                </div>
            </DialogContent>
        </Dialog>


    )
}