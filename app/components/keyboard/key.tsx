'use client'
export default function Key({size,isKeyPressed,isPhaseActive, children}:any){
    if(size === 4)  console.log('size',size,`col-[_span_${String(size)}]`)
    return(<div className={`relative ${isPhaseActive} ${isKeyPressed} col-[_span_${String(size)}] `}>
       <span className="relative left-[2px] top-[2px] text-white">{children}</span>
        </div>)
}