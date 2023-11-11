'use client'
import {  useState } from "react"
import Key from "./key";

export default function KeyBoard({keysPressed,actualPhase}:any){
    const isPhaseActive = (phase:number)=>{
        if(phase !== 0)
return (phase === actualPhase) && '!border-pinky bg-pink-300';
    }
    const isKeyPressed = (key:string)=>keysPressed[key] && '!border-orange-900 !bg-orange-300';
    return(<div className="flex flex-col p-2">
        <div className="mt-1 grid aspect-[100/3] grid-cols-87 gap-1 [&>div]:border-2 [&>div]:border-pink-300">
        <Key size={9}  isKeyPressed={isKeyPressed('Escape')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('F1')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('F2')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('F3')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('F4')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('F5')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('F6')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('F7')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('F8')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('F9')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('F10')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('F11')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('F12')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('')} isPhaseActive={isPhaseActive(0)} />
        </div>
        <div className="mt-1 grid aspect-[100/5] grid-cols-87 gap-1 [&>div]:border-2 [&>div]:border-pink-300">
            <Key size={9}  isKeyPressed={isKeyPressed('Backquote')} isPhaseActive={isPhaseActive(0)} />
            <Key size={6}  isKeyPressed={isKeyPressed('Digit1')} isPhaseActive={isPhaseActive(1)}>
            <sup>1</sup>
            </Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit2')} isPhaseActive={isPhaseActive(1)}/>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit3')} isPhaseActive={isPhaseActive(1)}/>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit4')} isPhaseActive={isPhaseActive(1)}/>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit5')} isPhaseActive={isPhaseActive(1) }  />
            <Key size={6}  isKeyPressed={isKeyPressed('Digit6')} isPhaseActive={isPhaseActive(1) }  />
            <Key size={6}  isKeyPressed={isKeyPressed('Digit7')} isPhaseActive={isPhaseActive(1) }  />
            <Key size={6}  isKeyPressed={isKeyPressed('Digit8')} isPhaseActive={isPhaseActive(1) }  />
            <Key size={6}  isKeyPressed={isKeyPressed('Digit9')} isPhaseActive={isPhaseActive(1) }  />
            <Key size={6}  isKeyPressed={isKeyPressed('Digit0')} isPhaseActive={isPhaseActive(1) }  />
            <Key size={6}  isKeyPressed={isKeyPressed('Minus')} isPhaseActive={isPhaseActive(0)} />
            <Key size={6}  isKeyPressed={isKeyPressed('Equal')} isPhaseActive={isPhaseActive(0)} />
            <Key size={6}  isKeyPressed={isKeyPressed('Backspace')} isPhaseActive={isPhaseActive(0)} />
            
        </div>
        <div className="mt-1 grid aspect-[100/5] grid-cols-87 gap-1 [&>div]:border-2 [&>div]:border-pink-300">
            <div className={`${(keysPressed['Tab']) && "bg-red-300"} col-[_span_9] `}/> {/* //Q */}
            <Key size={6}  isKeyPressed={isKeyPressed('KeyQ')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}>
                <sup>Q</sup>
            </Key>
            <Key size={6}  isKeyPressed={isKeyPressed('KeyW')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  />
            <Key size={6}  isKeyPressed={isKeyPressed('KeyE')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  />
            <Key size={6}  isKeyPressed={isKeyPressed('KeyR')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  />
            <Key size={6}  isKeyPressed={isKeyPressed('KeyT')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  />
            <Key size={6}  isKeyPressed={isKeyPressed('KeyY')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  />
            <Key size={6}  isKeyPressed={isKeyPressed('KeyU')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  />
            <Key size={6}  isKeyPressed={isKeyPressed('KeyI')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  />
            <Key size={6}  isKeyPressed={isKeyPressed('KeyO')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  />
            <Key size={6}  isKeyPressed={isKeyPressed('KeyP')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  />
            <Key size={6}  isKeyPressed={isKeyPressed('BracketLeft')} isPhaseActive={isPhaseActive(0)} />
            <Key size={6}  isKeyPressed={isKeyPressed('BracketRight')} isPhaseActive={isPhaseActive(0)} />
            <Key size={6}  isKeyPressed={isKeyPressed('Enter')} isPhaseActive={isPhaseActive(0)} />
            
        </div>
        <div className="mt-1 grid aspect-[100/5] grid-cols-87 gap-1 [&>div]:border-2 [&>div]:border-pink-300">
        <Key size={6}  isKeyPressed={isKeyPressed('CapsLock')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyA')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}>
            <sup>A</sup>
        </Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyS')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyD')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyF')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyG')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyH')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyJ')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyK')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyL')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('Semicolon')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('Quote')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('Backslash')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  />
        <Key size={9}  isKeyPressed={isKeyPressed('Enter')} isPhaseActive={isPhaseActive(0)}  />
        </div>
        <div className="mt-1 grid aspect-[100/5] grid-cols-87 gap-1 [&>div]:border-2 [&>div]:border-pink-300">
        <Key size={9}  isKeyPressed={isKeyPressed('ShiftLeft')} isPhaseActive={isPhaseActive(3) || isPhaseActive(4) || isPhaseActive(5)} />
        <Key size={6}  isKeyPressed={isKeyPressed('IntBackslash')} isPhaseActive={isPhaseActive(0)} />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyZ')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)} >
        <sup>Z</sup>
        </Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyX')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyC')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyV')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyB')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyN')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('KeyM')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('Comma')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('Period')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  />
        <Key size={6}  isKeyPressed={isKeyPressed('Slash')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  />
        <div className={`${(keysPressed['ShiftRight'] ) && "bg-red-300"} col-[_span_12]`}/>
        </div>
        <div className="mt-1 grid aspect-[100/5] grid-cols-87 gap-1 [&>div]:border-2 [&>div]:border-pink-300">
            <div className={`${(keysPressed['ControlLeft'] ) && "bg-red-300"} col-[_span_6] `}/>
            <div className={`${(keysPressed['AltLeft'] ) && "bg-red-300"} col-[_span_8] `}/>
            <div className={`${(keysPressed['MetaLeft'] ) && "bg-red-300"} col-[_span_8] `}/>
            <div className={`${(keysPressed['Space'] ) && "bg-red-300"} col-[_span_31] `}/>
            <div className={`${(keysPressed['MetaRight'] ) && "bg-red-300"} col-[_span_8] `}/>
            <div className={`${(keysPressed['AltRight'] ) && "bg-red-300"} col-[_span_8] `}/>
            <div className={`${(keysPressed['ArrowLeft'] ) && "bg-red-300"} col-[_span_6] `}/>
            <div className="col-[_span_6] flex flex-col  justify-between border-none [&>div]:border-2 [&>div]:border-pink-300">
                <div className={`${(keysPressed['ArrowUp'] ) && "bg-red-300"} aspect-[3/1.2]  `}>
                </div>
                <div className={`${(keysPressed['ArrowDown'] ) && "bg-red-300"} aspect-[3/1.2]  `}>
                </div>
            </div>
            <div className={`${(keysPressed['ArrowRight'] ) && "bg-red-300"} col-[_span_6] `}/>
        </div>
    </div>)
}
