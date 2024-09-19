"use client"

import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import { create } from "zustand";

type States = {
    cart: Cart[],
    
}

type Actions = {
    upsertCartItem: (product: Product, quantity: number, obs?: string) => void;
    
}

const inicialState: States = {
    cart: [],
    
}

export const useCartStore = create<States & Actions>()(set => ({
    ...inicialState,
    
    upsertCartItem: (product, quantity, obs) => set(states => {
        let newCart = states.cart;

        // VERIFICA SE O INDEX DO PRODUTO SELECIONADO EXISTE 
        let productIndex = newCart.findIndex( item => item.product.id === product.id);

        // SE O INDEX NÃO EXISTE, VAI SER CRIADO COM QUANTIDADE ZERO
        if (productIndex < 0) {
            newCart.push({product, quantity: 0, obs});
            // O INDEX NOVAMENTE ATUALIZADO
            productIndex = newCart.findIndex( item => item.product.id === product.id);
        }

        // SE O INDEX EXISTE, VAI SER SOMADO 
        newCart[productIndex].quantity += quantity;

        // SE A QUANTIDADE FICAR IGUAL A ZERO DELETA O INDEX

        if (newCart[productIndex].quantity <= 0) {
            newCart = newCart.filter(item => item.product.id !== product.id);
        }


        return { ...states, cart: newCart }
    })
}));