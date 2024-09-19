"use client"

import { Product } from "@/types/product"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ModalProduct } from "@/components/produtos/modalProduct";
import "@/components/i18n";
import { useTranslation } from "react-i18next";

type Props = {
    item: Product;
}

export const ProductItem = ({ item }: Props) => {

    
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const {t} = useTranslation();
    
    return (            
        <div>
            <div className="flex items-center rounded-md gap-4 p-4 transition-colors ease-in-out duration-500 border border-transparent shadow-md shadow-zinc-600 hover:shadow-lg hover:border-zinc-700 hover:shadow-zinc-700"> 
                <div className="md:flex-1 rounded-md overflow-hidden">
                    <img className="w-full h-36 md:h-52 object-cover " src={item.image} alt={item.name} />  
                </div>
                <div className="flex flex-1 flex-col gap-4">    
                    <div className="flex-1">
                        <p className="text-base font-semibold">{item.name}</p>
                        <div className="w-52 line-clamp-3 text-sm opacity-80 mt-2 ">{item.description}</div>
                    </div>
                    

                    <p className="flex-1 text-base opacity-80 text-right">R$ {item.price.toFixed(2)}</p>
                    <Button
                        variant="outline"
                        className="text-md border border-gray-800"
                        onClick={() => setCheckoutOpen(true)}
                    >
                        {t("productItem.botao")}
                    </Button>
                </div>
            </div>
            {checkoutOpen &&
                <ModalProduct item={item} open={checkoutOpen} onOpenChange={setCheckoutOpen} />
            }
        </div>
    )
}