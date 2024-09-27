"use client"

import React from "react";
import { Product } from "@/types/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllProducts } from "@/services/getAllProduct";
import { ProductItem } from "@/components/produtos/productItem";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { useTranslation } from "react-i18next";
import "@/components/i18n";
import { ProductEmpty } from "./empty";

type Tab = {
   title: string;
   value: string;
   product: Product[];
}

export const Body = async () => {

   const { t } = useTranslation();
   const products = await getAllProducts();

   const tabs: Tab[] = [
      {
         title: t("tabs.entradas"),
         value: "entradas",
         product: products.filter(item => item.category === 'entradas')
      },
      {
         title: t("tabs.sushis"),
         value: "sushis",
         product: products.filter(item => item.category === 'sushis')
      },
      {
         title: t("tabs.sashimis"),
         value: "sashimis",
         product: products.filter(item => item.category === 'sashimis')
      },
      {
         title: t("tabs.tmakis"),
         value: "tmaki",
         product: products.filter(item => item.category === 'tmaki')
      },
      {
         title: t("tabs.yakssobas"),
         value: "yakssobas",
         product: products.filter(item => item.category === 'yakssobas')
      },
      {
         title: t("tabs.combinados"),
         value: "combo",
         product: products.filter(item => item.category === 'combo')
      },
      {
         title: t("tabs.bebidas"),
         value: "bebida",
         product: products.filter(item => item.category === 'bebida')
      },
      {
         title: t("tabs.novidades"),
         value: "novidades",
         product: products.filter(item => item.category === 'novidades')
      },
      {
         title: t("tabs.pokes"),
         value: "pokes",
         product: products.filter(item => item.category === 'pokes')
      },
   ]
   return (

      <Tabs defaultValue="entradas">
         <div className="bg-black z-20 py-2 fixed top-28 left-0 right-0 w-screen shadow-lg shadow-zinc-800 border-t-2 border-zinc-950">
            <Carousel
               opts={{
                  align: "center",
               }}
               className="mx-auto max-w-sm md:max-w-3xl lg:max-w-5xl"
            >
               <CarouselContent className="">
                  {tabs.map(item => (
                     <CarouselItem key={item.value} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
                        <TabsList className="relative flex">

                           <TabsTrigger
                              key={item.value}
                              value={item.value}
                              className="w-full bg-black border-0 text-gray-400 duration-300 hover:text-lg"
                           >

                              {item.title}
                           </TabsTrigger>

                        </TabsList>
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <CarouselPrevious className="hidden border-none bg-gray-900 text-gray-500 md:flex" />
               <CarouselNext className="hidden border-none bg-gray-900 text-gray-500 md:flex" />
            </Carousel>
         </div>


         {tabs.map(item => (
            <TabsContent
               key={item.value}
               value={item.value}
               className=""
            >
               {item.product.length > 0 &&
                  <div className="w-full relative mx-auto max-w-6xl">
                     <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mx-4">
                        {item.product.map(item => (
                           <ProductItem key={item.id} item={item} />
                        ))}
                     </div>
                  </div>


               }
               {item.product.length === 0 &&
                  <ProductEmpty />
               }

            </TabsContent>
         ))}


      </Tabs>

   )
};