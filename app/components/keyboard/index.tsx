'use client'
import { useGlobalContext } from "@/app/context/store";
import Key from "./key";
import themes from "@/app/constants/themes";
import Image from "next/image";

export default function KeyBoard({keysPressed,actualPhase, isWrongType}:any){
    const {theme} = useGlobalContext();
    const isPhaseActive = (phase:number)=>{
        if(phase !== 0)
        if(phase === actualPhase){
         return themes[theme!] ? themes[theme!].highlightedKey: '!bg-pink-100 !text-pinky';
        }
    }
    const isKeyPressed = (key:string)=>{
        if(keysPressed[key])
        return themes[theme!] ? themes[theme!].keyPressed : '!border-pinky !bg-pinky-300 !text-pinky'
    };
    return(<div className={`${isWrongType ? 'animate-wiggle' : ''}`}>
        <div className={`  mt-1 grid aspect-[100/3] grow grid-cols-87 `}>
        <div className={`col-[_span_9] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'} ${isKeyPressed('Escape')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
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
        <div className={`mt-1 grid  grid-cols-87`}>
            <div className={`col-[_span_6] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'}  ${isKeyPressed('Backquote')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit1')} isPhaseActive={isPhaseActive(1)}>
            <sup>1</sup>
            </Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit2')} isPhaseActive={isPhaseActive(1)}><sup>2</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit3')} isPhaseActive={isPhaseActive(1)}><sup>3</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit4')} isPhaseActive={isPhaseActive(1)}><sup>4</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit5')} isPhaseActive={isPhaseActive(1) }  ><sup>5</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit6')} isPhaseActive={isPhaseActive(1) }  ><sup>6</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit7')} isPhaseActive={isPhaseActive(1) }  ><sup>7</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit8')} isPhaseActive={isPhaseActive(1) }  ><sup>8</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit9')} isPhaseActive={isPhaseActive(1) }  ><sup>9</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Digit0')} isPhaseActive={isPhaseActive(1) }  ><sup>0</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Minus')} isPhaseActive={isPhaseActive(0)} ><sup>?</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Equal')} isPhaseActive={isPhaseActive(0)} ><sup>¿</sup></Key>
            <div className={`col-[_span_9] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'}  ${isKeyPressed('Backspace')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
            
        </div>
        <div className={`mt-1 grid aspect-[100/5] grid-cols-87 `}>
            <Key size={9}  isKeyPressed={isKeyPressed('Tab')} isPhaseActive={isPhaseActive(0)}>
                <sup></sup>
            </Key>
            <Key size={6}  isKeyPressed={isKeyPressed('KeyQ')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}>
                <sup>Q</sup>
            </Key>
            <Key size={6}  isKeyPressed={isKeyPressed('KeyW')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  ><sup>W</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('KeyE')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  ><sup>E</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('KeyR')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  ><sup>R</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('KeyT')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  ><sup>T</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('KeyY')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  ><sup>Y</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('KeyU')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  ><sup>U</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('KeyI')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  ><sup>I</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('KeyO')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  ><sup>O</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('KeyP')} isPhaseActive={isPhaseActive(1) || isPhaseActive(3)}  ><sup>P</sup></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('BracketLeft')} isPhaseActive={isPhaseActive(0)} ></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('BracketRight')} isPhaseActive={isPhaseActive(0)} ></Key>
            <Key size={6}  isKeyPressed={isKeyPressed('Enter')} isPhaseActive={isPhaseActive(0)} ></Key>
            
        </div>
        <div className={`mt-1 grid aspect-[100/5] grid-cols-87`}>
        <div className={`col-[_span_12] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'} ${isKeyPressed('CapsLock')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyA')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}>
            <sup>A</sup>
        </Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyS')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  ><sup>S</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyD')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  ><sup>D</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyF')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  ><sup>F</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyG')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  ><sup>G</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyH')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  ><sup>H</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyJ')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  ><sup>J</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyK')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  ><sup>K</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyL')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  ><sup>L</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('Semicolon')} isPhaseActive={isPhaseActive(2) || isPhaseActive(4)}  ><sup>Ñ</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('Quote')} isPhaseActive={isPhaseActive(0) }  ><sup></sup></Key>
        <div className={`col-[_span_9] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'}  ${isKeyPressed('Enter')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
        </div>
        <div className={`mt-1 grid aspect-[100/5] grid-cols-87 `}>
        <Key size={9}  isKeyPressed={isKeyPressed('ShiftLeft')} isPhaseActive={isPhaseActive(3) || isPhaseActive(4) || isPhaseActive(5)} ><sup>
        <Image className={`${themes[theme!] ? themes[theme!].shiftKey: 'white-filter'} ml-[4px]`} src="./icons/shift-key.svg" width="10" height="10" alt='download icon'/>
        </sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('IntBackslash')} isPhaseActive={isPhaseActive(0)} ><sup></sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyZ')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)} >
        <sup>Z</sup>
        </Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyX')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  ><sup>X</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyC')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  ><sup>C</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyV')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  ><sup>V</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyB')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  ><sup>B</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyN')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  ><sup>N</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('KeyM')} isPhaseActive={isPhaseActive(2) || isPhaseActive(5)}  ><sup>M</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('Comma')} isPhaseActive={isPhaseActive(2) }  ><sup>,</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('Period')} isPhaseActive={isPhaseActive(2) }  ><sup>.</sup></Key>
        <Key size={6}  isKeyPressed={isKeyPressed('Slash')} isPhaseActive={isPhaseActive(0)}  ><sup></sup></Key>
        <Key size={12}  isKeyPressed={isKeyPressed('ShiftRight')} isPhaseActive={isPhaseActive(0)}  ><sup></sup></Key>
        </div>

        <div className={`mt-1 grid aspect-[100/5] grid-cols-87 `}>
        <div className={`col-[_span_6] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'}  ${isKeyPressed('ControlLeft')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
        <div className={`col-[_span_8] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'}  ${isKeyPressed('AltLeft')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
        <div className={`col-[_span_8] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'}  ${isKeyPressed('MetaLeft')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
        <div className={`col-[_span_31] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'} ${isKeyPressed('Space')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
        <div className={`col-[_span_8] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'}  ${isKeyPressed('MetaRight')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
        <div className={`col-[_span_8] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'}  ${isKeyPressed('AltRight')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
        <div className={`col-[_span_6] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'}  ${isKeyPressed('ArrowLeft')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
        <div className={`col-[_span_6] flex flex-col  justify-between border-none `}>
        <Key size={'3/1.2'}  isKeyPressed={isKeyPressed('ArrowUp')} isPhaseActive={isPhaseActive(0)}  ></Key>
        <Key size={'3/1.2'}  isKeyPressed={isKeyPressed('ArrowDown')} isPhaseActive={isPhaseActive(0)}  ></Key>
            </div>
        
            <div className={`col-[_span_6] mx-[1px] flex`}><div className={`${themes[theme!] ? themes[theme!].borderKey : 'border-pinky text-white'}  ${isKeyPressed('ArrowRight')} grow border-2  pt-[8px] text-center text-[18px] leading-[12px]`}></div></div>
        </div>
    </div>)
}
