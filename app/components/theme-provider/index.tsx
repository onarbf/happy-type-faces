'use client'

import themes from "@/app/constants/themes";
import { useGlobalContext } from "@/app/context/store";

export default function ThemeProvider({children}: any){
    const {theme, setTheme} = useGlobalContext();

    return(<div>{theme && <div className={`flex max-h-[100%] min-h-[100vh] flex-col pr-[3vw] ${themes[theme!].bgColor} ${themes[theme!].textColor}`}>
        {children}
    </div>}</div>)
}