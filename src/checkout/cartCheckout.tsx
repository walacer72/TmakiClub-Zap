import { Cart } from "@/types/cart";

type Props = {
    item: Cart;
}

export const CartCheckout = ({ item }: Props) => {
    return (
        <div className="flex justify-between items-center gap-5 p-2 px-4 bg-background rounded-md border">
            <div className="w-14 overflow-hidden rounded-md">
                <img className="w-full h-auto object-cover" src={item.product.image} alt={item.product.name} />     
            </div>

            <p className="text-sm">{item.product.name}</p>
            <p className="text-md opacity-50 ">R$ {item.product.price.toFixed(2)}</p>


        </div>
    )
}