'use client'

import { ReactNode, useContext, useState } from "react"
import { createContext } from "react"
import { getCookie } from "../utils/cookies"


const contextObject = {
    theme: getCookie('NEXT_THEME'),
    setTheme: (value:string)=>{},
}

const GlobalContext = createContext<typeof contextObject>(contextObject)

export const GlobalContextProvider = ({children}:{children: ReactNode})=>{
    const [theme, setTheme] = useState<typeof contextObject['theme']>(getCookie('NEXT_THEME'));

    return (<GlobalContext.Provider value={{theme, setTheme}}>
        {children}
    </GlobalContext.Provider>)

}

export const useGlobalContext = ()=> useContext(GlobalContext);