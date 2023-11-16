'use client'

import themes from "@/app/constants/themes";
import { useGlobalContext } from "@/app/context/store";

export default function ThemeProvider({children}: any){
    const {theme, setTheme} = useGlobalContext();

    return(<div>{theme && <div className={`max-h-[100%] min-h-[100%] pr-[3vw] ${themes[theme!].bgColor} ${themes[theme!].textColor}`}>
        {children}
    </div>}</div>)
}