'use client'
export default function Key({size,isKeyPressed,isPhaseActive}:any){
    if(size === 4)  console.log('size',size,`col-[_span_${String(size)}]`)
    return(<div className={`${isPhaseActive} ${isKeyPressed} col-[_span_${String(size)}] `}/>)
}