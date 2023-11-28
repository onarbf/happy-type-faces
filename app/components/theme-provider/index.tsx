'use client'

import themes from "@/app/constants/themes";
import { useGlobalContext } from "@/app/context/store";
import { useEffect, useState } from "react";

export default function ThemeProvider({children}: any){
    let {theme} = useGlobalContext();
    
    return(
        <div className={`flex max-h-[100%] min-h-[100vh] flex-col pr-[3vw] ${theme && themes[theme!].bgColor} ${theme && themes[theme!].textColor}`}>
            {children}
        </div>
    )
}