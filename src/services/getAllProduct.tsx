import { Products } from "@/data";
import { Product } from "@/types/product";

export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise( resolve => {
        return setTimeout(() => {
            resolve(Products)
        }, 2000)
    });
}