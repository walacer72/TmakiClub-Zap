"use client"

import { useCartStore } from "@/stores/cart-stores";
import { Cart } from "@/types/cart"
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
    item: Cart;
}   

export const CartSubItem = ({item}: Props) => {

    const { upsertCartItem } = useCartStore(states => states)
    
    return (
        <div className="flex items-center gap-2">
            <Button
            variant={'outline'}
            size={"icon"}
            className="size-5"
            onClick={() => upsertCartItem(item.product, 1 )}
            >
                <PlusIcon/>
            </Button>
            <div className="">{item.quantity}</div>
            <Button
            variant={'outline'}
            size={"icon"}
            className="size-5"
            onClick={() => upsertCartItem(item.product, - 1)}
            >
                <MinusIcon/>
            </Button>
        </div>
    )
}