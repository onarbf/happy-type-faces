'use client'

import themes from "@/app/constants/themes";
import { useGlobalContext } from "@/app/context/store";

export default function Header(){
    const {theme} = useGlobalContext();
    return(<header className={`h-[6vh] px-[2.5vw] pt-[2.5vh] text-[1.3rem] font-bold ${themes[theme!].textColor}`}>
            Hapy <span className="font-normal italic">(Type)</span> Faces
        </header>)
}