'use client'
import Image from "next/image";
import { Suspense, useState } from "react"

export default function Glyph({letter, facePart}: any){
                const [isHovered, setIsHovered] = useState(false);
                const route = `/icons/${facePart}/Glifos_${letter}.svg`;
                
                return (
                  <td onMouseOver={()=>setIsHovered(true)}  onMouseOut={()=>setIsHovered(false)} className={`aspect-square border border-pinky leading-[0px] tracking-[0px]
                  hover:bg-pinky hover:text-white`}>
                  <div className=" flex !aspect-square h-full w-full items-center justify-center ">
                    {!isHovered?
                    (letter !== ' '? <Image src={route} className="pink-filter aspect-square" alt={`${letter}`} width={60} height={60}/>: '')
                    : letter}
                  </div>
                </td>)
}