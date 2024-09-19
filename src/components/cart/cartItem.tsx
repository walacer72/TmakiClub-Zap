import { Cart } from "@/types/cart";
import { Product } from "@/types/product"
import { CartSubItem } from "./cartSubItem";

type Props = {
    item: Cart;
}

export const CartItem = ({item}: Props) => {
    return (
        <div className="flex items-center gap-5 p-2 bg-background rounded-md border shadow-md shadow-zinc-800">  
            <div className="w-16 overflow-hidden rounded-md">
                <img className="w-full h-auto object-cover" src={item.product.image} alt={item.product.name} />
            </div>
            <div className="flex-1">
                <p className="text-sm">{item.product.name}</p>
                <p className="text-md opacity-50 ">R$ {item.product.price.toFixed(2)}</p>
            </div>
            <div className="">
                <CartSubItem item={item}/> 
            </div>
            
        </div>
    )
}