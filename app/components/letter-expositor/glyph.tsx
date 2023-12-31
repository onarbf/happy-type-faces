'use client'
import themes from "@/app/constants/themes";
import { useGlobalContext } from "@/app/context/store";
import Image from "next/image";
import {useState } from "react"

export default function Glyph({letter, facePart}: any){
                const {theme} = useGlobalContext();
                const [isHovered, setIsHovered] = useState(false);
                const route = `/icons/${facePart}/Glifos_${letter}.svg`;
                
                return (
                  <td onMouseEnter={()=>setIsHovered(true)}  onMouseOut={()=>setIsHovered(false)} className={`aspect-square border leading-[0px] tracking-[0px] ${themes[theme!] ? themes[theme!].glyphExpositor: 'border-pinky hover:bg-pinky hover:text-white '}`}>
                  <div className=" flex !aspect-square h-full w-full items-center justify-center ">
                    {!isHovered?
                    (letter !== ' '? <Image src={route} className={`${themes[theme!] ? themes[theme!].glyphFilter : 'pink-filter'} aspect-square`} alt={`${letter}`} width={200} height={200}/>: '')
                    : letter}
                  </div>
                </td>)
}