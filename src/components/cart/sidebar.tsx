"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { RocketIcon } from "@radix-ui/react-icons"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/stores/cart-stores"
import { useState } from "react"
import { CartItem } from "./cartItem"
import { RegisterForm } from "@/checkout/registerForm"
import { useTranslation } from "react-i18next"
import "@/components/i18n";



export const SideBar = () => {

   const [checkoutOpen, setCheckoutOpen] = useState(false);
   const { cart } = useCartStore(states => states);
   const { t } = useTranslation();


   let subTotal = 0;
   let itensTotal = 0;

   for (let item of cart) {
      subTotal += item.quantity * item.product.price;
      itensTotal += item.quantity;
   }

   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button
               variant={'outline'}
               className={`relative font-roboto100 transition-colors duration-500 p-2 md:p-4 bg-black border border-[#fe0000] hover:text-black

               ${cart.length > 0 ? 'bg-[#fe0000] hover:bg-red-600 hover:text-black' : 'bg-black hover:bg-[#fe0000] text-white '}`}
            >

               <RocketIcon className="size-4 mr-2 md:size-5" />

               {cart.length <= 0 &&
                  <p className="text-sm">{t("sidebar.carrinho")}</p>
               }

               {cart.length > 0 &&
                  <p className="text-sm md:text-base text-white">{t("sidebar.carrinho")}<span className="text-xs md:text-sm text-black font-semibold">/ {itensTotal} {itensTotal === 1 ? 'item' : 'itens'}</span></p>
               }

            </Button>

         </SheetTrigger>
         <SheetContent>
            <SheetHeader>
               <SheetTitle className="font-roboto100">{t("sidebar.carrinho")}</SheetTitle>
            </SheetHeader>

            <div className="max-h-[350px] flex flex-col gap-5 mt-4 p-2 text-wrap overflow-x-hidden overflow-y-scroll bg-background">

               {cart.map(item => (
                  <CartItem key={item.product.id} item={item} />
               ))}
            </div>

            <Separator className="my-4" />

            <div className="flex font-roboto100 justify-between items-center text-sx">
               <div className="">Subtotal: </div>
               <div className="">R$ {subTotal.toFixed(2)}</div>
            </div>

            <Separator className="my-4" />

            <div className="text-center font-roboto100">
               <Button
                  disabled={cart.length === 0}
                  onClick={() => setCheckoutOpen(true)}
                  className="bg-slate-900 text-white hover:bg-slate-700"
               >
                  {t("sidebar.botao")}
               </Button>

            </div>

            <RegisterForm
               open={checkoutOpen}
               onOpenChange={setCheckoutOpen}
            />
         </SheetContent>
      </Sheet>
   )
}