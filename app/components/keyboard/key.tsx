'use client'
export default function Key({size,isKeyPressed,isPhaseActive, children}:any){
    if(size === 4)  console.log('size',size,`col-[_span_${String(size)}]`)
    return(<div className={` ${isPhaseActive} ${isKeyPressed} col-[_span_${String(size)}] `}>
       <div className=" pl-[2px] pt-[8px] leading-[12px] text-white">{children}</div>
        </div>)
}