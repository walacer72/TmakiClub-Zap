"use client"


import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useCartStore } from "@/stores/cart-stores";
import { Dispatch, FocusEvent, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";

const FormSchema = z.object({
  textArea: z.string().max(80, {
    message: "Maximo de 80 caracteres!.",
  }),
})

type Props = {
  setComment: Dispatch<SetStateAction<string>>;
}

export const TextArea = ({ setComment }: Props) => {


  const [value, setValue] = useState('')
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })


  const handleClickArea = () => {
    setComment(value)
  }


  return (
    <Form {...form}>
      <form className="w-full">
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="textArea"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-base">{t("textArea.comentario")}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("textArea.placeholder")}
                    className="p-2 h-8 resize-none border text-sm border-zinc-700"  
                    
                    {...field}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={handleClickArea}

                  />
                </FormControl>
                <div className="h-4">
                  <FormMessage />
                </div>

              </FormItem>
            )}
          />

        </div>



      </form>
    </Form>
  )
}