
import { create } from "zustand";

type States = {
    personData: {
        name: string;
        tel: string;
        email: string;
    }

    address: {
        zipCode?: string;
        street: string;
        number: string;
        complement: string;
        district: string;
        city: string;
    }
}

type Actions = {
    setPersonData: (name: States["personData"]) => void;
    setAddress: (name: States["address"]) => void;
}

const inicialState: States = {

    personData: {
        name: "",
        tel: "",
        email: "",
    },

    address: {

        zipCode: "",
        street: "",
        number: "",
        complement: "",
        district: "",
        city: ""
    }
}

export const useCheckoutStore = create<States & Actions>()(set => ({
    ...inicialState,
    setPersonData: (personData) => set(state => ({ ...state, personData })),
    setAddress: (address) => set(state => ({ ...state, address }))
}));