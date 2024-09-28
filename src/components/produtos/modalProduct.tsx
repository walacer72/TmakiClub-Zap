"use client"

import { useToast } from "../ui/use-toast";
import { useCartStore } from "@/stores/cart-stores";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Product } from "@/types/product";
import { useState } from "react";
import { TextArea } from "./textArea";
import { useTranslation } from "react-i18next";


type Props = {
   item: Product;
   open: boolean;
   onOpenChange: (open: boolean) => void;
}

export const ModalProduct = ({ item, open, onOpenChange }: Props) => {

   const [qtd, setQtd] = useState<number>(1)
   const [comment, setComment] = useState('')
   const { upsertCartItem } = useCartStore(states => states);
   const { toast } = useToast();
   const { t } = useTranslation();



   const handleAddButton = () => {
      upsertCartItem(item, qtd, comment);
      console.log(comment)
      toast({
         title: `${t("modalProduct.msg")}`,
         description: item.name

      })
      onOpenChange(false);
   }

   let subTotal = item.price * qtd;

   const handlePlusButton = (n: number) => {

      setQtd(qtd + n <= 0 ? 1 : qtd + n)
   }


   return (
      <Dialog
         key={item.id}
         open={open}
         onOpenChange={() => onOpenChange(false)}
      >

         <DialogContent className="flex font-roboto100 flex-col items-center w-screen h-full p-0 md:p-4 gap-8 mx-auto md:h-auto md:max-w-6xl md:flex-row md:items-stretch">
            <div className="flex-1 w-full h-auto rounded-bl-3xl rounded-br-3xl md:rounded-md overflow-hidden">
               <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
            </div>
            <DialogHeader className="flex-1 w-full p-4 flex-col justify-between">
               <DialogTitle className="flex flex-col gap-8 mb-4">
                  <p className="font-bold text-base md:text-xl">{item.name}</p>
                  <p className="text-sm md:text-lg text-muted-foreground">
                     {t(`${item.nameDesc}.description`)}
                  </p>

               </DialogTitle>
               <DialogDescription>
                  <div className="flex w-full flex-col md:gap-4">
                     <div className="w-full">
                        <TextArea setComment={setComment} />
                     </div>
                     <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                           <Button
                              variant={'outline'}
                              size={"icon"}
                              className="size-7"
                              onClick={() => handlePlusButton(+ 1)}
                           >
                              <PlusIcon />
                           </Button>
                           <p className="text-2xl">{qtd}</p>
                           <Button
                              variant={'outline'}
                              size={"icon"}
                              className="size-7"
                              onClick={() => handlePlusButton(- 1)}
                           >
                              <MinusIcon />
                           </Button>
                        </div>
                        <Button
                           onClick={handleAddButton}
                           className="md:min-w-72 h-16 flex p-4 gap-4 md:gap-12 --background border border-background.dark text-base md:text-lg" >
                           <p className="font-robotoBold">{t("modalProduct.botao")}</p>
                           <p className="text-xl md:text-2xl font-robotoBold">R$: {subTotal.toFixed(2)}</p> 
                        </Button>
                     </div>

                  </div>
               </DialogDescription>

            </DialogHeader>
         </DialogContent>
      </Dialog>
   )
}