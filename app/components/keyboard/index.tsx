'use client'
import { Key, useState } from "react"

export default function KeyBoard({keysPressed}:any){


    return(<div className="flex flex-col border p-2">
        <div className="mt-1 grid aspect-[100/3] grid-cols-87 gap-1 [&>div]:border-2">
            <div className="col-[_span_9]"/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className=" col-[_span_6] "/>
        </div>
        <div className="mt-1 grid aspect-[100/5] grid-cols-87 gap-1 [&>div]:border-2">
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className=" col-[_span_9] "/>
        </div>
        <div className="mt-1 grid aspect-[100/5] grid-cols-87 gap-1 [&>div]:border-2" tabIndex={0}>
            <div className={`col-[_span_9] `}/> {/* //Q */}
            <div className={`${(keysPressed['Q'] || keysPressed['q']) && "bg-red-300"} col-[_span_6] `}/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className=" col-[_span_6] "/>
        </div>
        <div className="mt-1 grid aspect-[100/5] grid-cols-87 gap-1 [&>div]:border-2 ">
            <div className="col-[_span_11] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className=" col-[_span_4] "/>
        </div>
        <div className="mt-1 grid aspect-[100/5] grid-cols-87 gap-1 [&>div]:border-2">
            <div className={`${(keysPressed['Shift'] ) && "bg-red-300"} col-[_span_10] `}/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] "/>
            <div className=" col-[_span_11] "/>
        </div>
        <div className="mt-1 grid aspect-[100/5] grid-cols-87 gap-1 [&>div]:border-2">
            <div className="col-[_span_6] "/>
            <div className="col-[_span_8] "/>
            <div className="col-[_span_8] "/>
            <div className="col-[_span_31] "/>
            <div className="col-[_span_8] "/>
            <div className="col-[_span_8] "/>
            <div className="col-[_span_6] "/>
            <div className="col-[_span_6] flex flex-col  justify-between border-none [&>div]:border-2">
                <div className="aspect-[3/1.2] ">
                </div>
                <div className="aspect-[3/1.2] ">
                </div>
            </div>
            <div className="col-[_span_6] "/>
        </div>
         
         
    </div>)
}
