'use client'

import themes from "@/app/constants/themes"
import { useGlobalContext } from "@/app/context/store";

export default function Key({size,isKeyPressed,isPhaseActive, children}:any){
    const {theme} = useGlobalContext();
    const span = `col-[_span_${String(size)}] `
    if(size === 4)  console.log('size',size,`col-[_span_${String(size)}]`)
    return(<div className={`${span} mx-[1px] flex`}>
       <div className={`${themes[theme!].borderKey}  ${isPhaseActive} ${isKeyPressed} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}>{children}</div>
        </div>)
}