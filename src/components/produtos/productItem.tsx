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
            <div className="flex bg-background items-center rounded-md gap-4 p-4 transition-colors ease-in-out duration-500 border border-transparent shadow-md shadow-zinc-600 hover:shadow-lg md:hover:border-zinc-700 md:hover:shadow-zinc-700"> 
                <div className="flex-initial md:flex-1 rounded-md overflow-hidden">
                    <img className="w-full h-36 md:h-52 object-cover " src={item.image} alt={item.name} />        
                </div>
                <div className="flex flex-1 h-36 md:h-52 flex-col justify-between gap-2 md:gap-4">    
                    <div className="flex-1 w-full"> 
                        <p className="text-sm md:text-base font-semibold line-clamp-1">{item.name}</p>
                        <div className="line-clamp-2 md:line-clamp-3 text-xs md:text-sm opacity-80 mt-2 ">{t(`${item.nameDesc}.description`)}</div>       
                    </div>
                    

                    <p className=" text-base opacity-80 text-right">R$ {item.price.toFixed(2)}</p>
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