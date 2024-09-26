"use client"

import * as React from "react"
import { MoonIcon, SunIcon, LaptopIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function ToogleTheme() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>  
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className=" bg-black text-white border border-gray-800 w-9 h-9 md:w-10 md:h-10">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black text-white border border-gray-800" align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
            <SunIcon className="size-5 mr-2"/> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
            <MoonIcon className="size-5 mr-2"/> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
            <LaptopIcon className="size-5 mr-2"/> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
