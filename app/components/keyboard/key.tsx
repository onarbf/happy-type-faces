

export default function Key({size,isKeyPressed,isPhaseActive}:any){
    return(<div className={`${isPhaseActive} ${isKeyPressed} col-[_span_${size}] `}/>)
}