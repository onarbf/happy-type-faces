'use client'

import themes from "@/app/constants/themes";
import { useGlobalContext } from "@/app/context/store";
import { useState } from "react";
import SideBar from "../sidebar";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const {theme} = useGlobalContext();
    return(<header className={`h-[6vh] px-[2.5vw] pt-[2.5vh] text-[1.3rem] font-bold ${themes[theme!].textColor}`}>
            <div className="flex justify-between ">
                <div>Hapy <span className="font-normal italic">(Type)</span> Faces</div>
                <div className="block md:hidden">
                    <button
                        className={`hamburger ${isOpen ? 'open' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={`hamburger-line origin-top-left ${themes[theme!].hamburguerStyle}`}></span>
                        <span className={`hamburger-line ${themes[theme!].hamburguerStyle}`}></span>
                        <span className={`hamburger-line origin-bottom-left ${themes[theme!].hamburguerStyle}`}></span>
                    </button>
                </div>
                </div>
                <div className={`relative z-10 ${themes[theme!].bgColor}`}>
                {isOpen && (<SideBar/>)}
            </div>
        </header>)
}