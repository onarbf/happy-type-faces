'use client'
import Image from "next/image";
import { Suspense, useState } from "react"

export default function Glyph({letter, facePart}: any){
                const [isHovered, setIsHovered] = useState(false);
                const route = `/icons/${facePart}/Glifos_${letter}.svg`;
                
                return (
                <Suspense>
                  <td  onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className={`aspect-square border border-pinky leading-[0px] tracking-[0px]
                  hover:bg-pinky`}>
                  <div className="white-filter flex !aspect-square h-full w-full items-center justify-center">
                    {isHovered?
                    (letter !== ' '? <Image src={route} className="aspect-square brightness-90 hue-rotate-180 saturate-150" alt={`${letter}`} width={60} height={60}/>: '')
                    : letter}
                  </div>
                </td>
                </Suspense>)
}