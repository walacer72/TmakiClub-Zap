"use client"


import { useState } from "react";
import { useTranslation } from "react-i18next";
import React from "react";
import "./i18n";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";


export const ToogleLanguage = () => {

    const { i18n } = useTranslation();
    const [lng, setLng] = useState('')

    const onChange = (lng: string) => {
        setLng(lng)
        changeLanguage(lng)
    }

    const changeLanguage = (lng: string) => {

        i18n.changeLanguage(lng)
    }

    return (

        <Select onValueChange={onChange}>
            <SelectTrigger className="w-10 flex bg-black text-white border border-gray-800 text-center justify-center hover:bg-gray-600">
                {lng || 'pt'}
            </SelectTrigger>
            <SelectContent className="bg-black text-white border border-gray-800">
                <SelectGroup>
                    <SelectLabel>Idiomas</SelectLabel>
                    <SelectItem value="pt">pt-BR</SelectItem>   
                    <SelectItem value="en">en-US</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

    )
}