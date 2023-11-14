'use client'

import themes from "@/app/constants/themes";
import { useGlobalContext } from "@/app/context/store";

export default function ThemeProvider({children}: any){
    const {theme, setTheme} = useGlobalContext();

    return(<div>{theme && <div className={`min-h-[100%] ${themes[theme!].bgColor} ${themes[theme!].textColor}`}>
        {children}
    </div>}</div>)
}