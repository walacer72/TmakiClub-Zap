import { SideBar } from "./cart/sidebar"
import { ToogleLanguage } from "./toogleLanguage"
import { ToogleTheme } from "./toogleTheme"
import { Sheet } from "./ui/sheet"


export const Header = () => {
    return (

        <div className="fixed flex-col font-roboto100 top-0 w-screen z-10 bg-black rounded-bl-3xl rounded-br-3xl md:rounded-none">
            <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
                <div className="cursor-pointer">
                    <img className="w-20 m-4" src="./images/logo-tmaki.webp"    alt="logo-TmakiClub" />
                </div>
                <div className="flex p-4 gap-1 md:gap-2">
                    <ToogleLanguage />
                    <ToogleTheme />
                    <SideBar /> 
                </div>
            </div>
            <div className="w-full z-0 h-[50px] bg-black border-t-2 border-zinc-950 rounded-bl-3xl rounded-br-3xl md:rounded-none"></div>
        </div>

    )
}