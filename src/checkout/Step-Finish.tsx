
import { Button } from "@/components/ui/button";
import { GenereteMessage } from "@/lib/generate-message";
import { useCartStore } from "@/stores/cart-stores";
import { useCheckoutStore } from "@/stores/checkout-store"
import { CheckoutSteps } from "@/types/checkoutSteps";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { CartCheckout } from "./cartCheckout";
import { useTranslation } from "react-i18next";

type Props = {
    setSteps: Dispatch<SetStateAction<CheckoutSteps>>;
}

export const StepFinish = ({ setSteps }: Props) => {

    const { personData } = useCheckoutStore(state => state);
    const { cart } = useCartStore(states => states);
    const { t } = useTranslation();

    let subTotal = 0;

    for (let item of cart) {
        subTotal += item.quantity * item.product.price;
    }

    const message = GenereteMessage();
    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`;

    return (
        <div className="h-96 font-roboto100 flex justify-between flex-col gap-4 text-center">
            <p className="text-xl"><span className="text-blue-500 text-2xl">{t("finish.text1")}</span> {personData.name}</p>

            <div className="max-h-[250px] flex flex-col gap-2 text-wrap overflow-x-hidden overflow-y-scroll">
                {cart.map(item => (
                    <CartCheckout item={item} />
                ))}
            </div>

            <div className="text-lg">Subtotal: <span className="opacity-50">R$ {subTotal.toFixed(2)}</span></div>

            <p className="text-base">{t("finish.text2")}</p>

            <div className="flex justify-between gap-4">
                <Button onClick={() => setSteps("address")} type="submit" variant={"link"}>{t("finish.botaoVoltar")}</Button>
                <Button className="p-4">
                    <Link className="text-base font-bold" target="_blank" href={linkZap}>{t("finish.botaoWhats")}</Link>
                </Button>
            </div>

        </div>
    )
}