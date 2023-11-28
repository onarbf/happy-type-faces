'use client'

import { ReactNode, useContext, useEffect, useState } from "react"
import { createContext } from "react"
import { getCookie } from "../utils/cookies"


const contextObject = {
    theme: getCookie('NEXT_THEME'),
    setTheme: (value:string)=>{},
}

const GlobalContext = createContext<typeof contextObject>(contextObject)

export const GlobalContextProvider = ({children}:{children: ReactNode})=>{
    const [theme, setTheme] = useState<typeof contextObject['theme']>('default');
    useEffect(()=>{
        if(theme){
            setTheme(getCookie('NEXT_THEME'))    
        }
    },[theme])

    return (<GlobalContext.Provider value={{theme, setTheme}}>
        {children}
    </GlobalContext.Provider>)

}

export const useGlobalContext = ()=> useContext(GlobalContext);