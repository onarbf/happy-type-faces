'use client'

import themes from "@/app/constants/themes";
import { useGlobalContext } from "@/app/context/store";
import { useState } from "react";
import SideBar from "../sidebar";
import Image from "next/image";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const {theme} = useGlobalContext();
    return(<header className={`h-[6vh] px-[2.5vw] pt-[2.5vh] text-[1.3rem] font-bold ${themes[theme!] ? themes[theme!].textColor: 'text-pinky'}`}>
            <div className="flex items-center justify-between">
                <div className="">
                <Image alt="change_theme" src={'/media/logo.svg'} className="h-auto w-[200px] md:w-[300px]"  width={300} height={300} />
                </div>
                <div className="block md:hidden">
                    <button
                        className={`hamburger ${isOpen ? 'open' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span  className={`hamburger-line origin-top-left ${themes[theme!] ?  themes[theme!].hamburguerStyle: 'bg-pinky'}`}></span>
                        <span className={`hamburger-line ${themes[theme!] ?  themes[theme!].hamburguerStyle: 'bg-pinky'}`}></span>
                        <span className={`hamburger-line origin-bottom-left ${themes[theme!] ?  themes[theme!].hamburguerStyle: 'bg-pinky'}`}></span>
                    </button>
                </div>
                </div>
                <div onClick={() => setIsOpen(false)}  className={`relative z-10 ${themes[theme!] ? themes[theme!].bgColor : 'bg-white'}`}>
                {isOpen && (<SideBar/>)}
            </div>
        </header>)
}