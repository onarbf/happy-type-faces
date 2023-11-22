'use client'
import KeyBoard from '@/app/components/keyboard';
import SideBar from '@/app/components/sidebar';
import { keys } from '@/app/constants/keys';
import themes from '@/app/constants/themes';
import { useGlobalContext } from '@/app/context/store';
import { textsPhases } from '@/app/context/textPhases';
import { setCookie } from '@/app/utils/cookies';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"


export  default function Index() {
  const {theme, setTheme} = useGlobalContext();
  const [inputText, setInputText] = useState('');
  const [keysPressed, setKeysPressed] = useState({});
  const [actualPhase, setActualPhase] = useState(1);
  const [isWrongType, setIsWrongType] = useState(false);
  const [glyphSize, setGlyphSize] = useState(270);

  const handleGlyphSize = (event: any) => {
    const newGlyphSize = parseInt(event.target.value, 10);
    setGlyphSize(newGlyphSize);
  };

  const variants = {
    hidden: { opacity: 0, y:'20px' },
    visible: { opacity: 1, y:'0' },
  }
  const actualTheme = themes[theme!]
  const toggleTheme = ()=>{
    if(theme === 'dark'){
      setCookie({name:'NEXT_THEME',value:'default', days:60});
      setTheme('default')
    }else{
      setCookie({name:'NEXT_THEME',value:'dark', days:60});
      setTheme('dark')
    }
  }
  const acceptedValues = {
    phase1: [keys.q,keys.w,keys.e,keys.r,keys.t,keys.y,keys.u,keys.i,keys.o,keys.p,keys[1],keys[2],keys[3],keys[4],keys[5],keys[6],keys[7],keys[8],keys[9],keys[0]],
    phase2: [keys.a,keys.s,keys.d,keys.f,keys.g,keys.h,keys.j,keys.k,keys.l,keys.ñ,keys.z,keys.x,keys.c,keys.v,keys.b,keys.n,keys.m,keys[8],keys[9],keys[0]],
  }
  useEffect(() => {
    let timer: any;
    if (isWrongType) {
      timer = setTimeout(() => setIsWrongType(false), 3000); // Duración total de la animación
    }

    return () => clearTimeout(timer); // Limpiar el timer
  }, [isWrongType]);

  const handleInput = (value: any)=>{
    if(value === undefined){
      return
    }
    if(actualPhase === 1 && acceptedValues.phase1.includes(value)){
      setInputText(prevInput=>(prevInput + value));
      updatePhase()
      
      return
    }
   
    if(actualPhase === 2 && acceptedValues.phase2.includes(value)){
      setInputText(prevInput=>(prevInput + value));
      updatePhase()
      return
    }

    if(actualPhase === 3 && value === value.toUpperCase() && acceptedValues.phase1.slice(0,10).includes(value.toLowerCase())){  
      setInputText(prevInput=>(prevInput + value));
      updatePhase()
      return
    }

    if(actualPhase === 4 && value === value.toUpperCase() && acceptedValues.phase2.slice(0,10).includes(value.toLowerCase())){  
      setInputText(prevInput=>(prevInput + value));
      updatePhase()
      return
    }
    if(actualPhase === 5 && value=== value.toUpperCase() && acceptedValues.phase2.slice(10,acceptedValues.phase2.length-1).includes(value.toLowerCase())){  
      setInputText(prevInput=>(prevInput + value));
      updatePhase()
      return
    }
    
    setIsWrongType(true)
    
  }

  const handleKeyDown = (event: any) => {
    event.preventDefault();
    console.log(event)
    if(event.nativeEvent.inputType === 'insertText'){
      if(event.nativeEvent.data.length === 1){
        handleInput(event.nativeEvent.data)
      }
    }
    
    if(event.nativeEvent.inputType === 'deleteContentBackward'){
      setInputText(prevInput=>{
        return prevInput.slice(0,-1)});
      backPhase();
    } 
  };

  const updatePhase = ()=>{
    if(actualPhase === 5){
      
      setActualPhase(1)
    }else{
      setActualPhase(actualPhase+1);  
    }
  }

  const backPhase = ()=>{
    if(actualPhase === 1){
      if(inputText.length === 0){
        return
      }
      setActualPhase(5)
      return
    }
      setActualPhase(actualPhase-1);  
  }

  const handleVirtualKeyDown = (event:any)=>{
    setKeysPressed(prevKeys => ({ ...prevKeys, [event.code]: true })); 
  }

  const handleVirtualKeyUp = (event:any)=>{
    setKeysPressed(prevKeys => ({ ...prevKeys, [event.code]: false }));
  }


  useEffect(() => {
 
    // Add event listener
    window.addEventListener('keydown', handleVirtualKeyDown);
    window.addEventListener('keyup',  handleVirtualKeyUp);

    // Remove event listener on cleanup
    return () =>{ 
      window.removeEventListener('keydown', handleVirtualKeyDown);
      window.addEventListener('keyup',  handleVirtualKeyUp);
    }
  },[actualPhase])


  return (
  <motion.section className={`mx-[2.5vw] grow`}
  initial="hidden"
  animate="visible"
  variants={variants}
  transition={{ duration: 0.8 }}>
    <div className="mt-[3rem] grid w-[100%] gap-4 md:grid-cols-24">
      <div className="col-span-21 hidden md:col-span-3 md:block">
        <SideBar/>
      </div>
      <div className="col-span-21 grid grid-cols-24  md:col-span-21">
        <div className="col-span-24 min-h-[6rem] md:px-[2.5rem]">
          <p className='pt-3'>Escribe tu texto:</p>
          <div className="py-2 ">
            <input className={`select:border-pinky max-w-[90%] rounded-md border-[2px] pl-2 text-[54px] focus:outline-none
            ${actualTheme.inputBorder} ${actualTheme.caret} ${actualTheme.inputTextColor} ${actualTheme.inputBgColor}`}
            type="text"
            value={`${inputText}` }
            onInput={handleKeyDown}
            />
            <div className="mt-4 block md:hidden">
              {textsPhases[`textPhaseMobile${actualPhase}`]}
              <div className={isWrongType ? 'animate-fade-in' : 'hidden animate-fade-out'}>¡Introduce la tecla correcta!</div>
            </div>
          </div>
        </div>

        <div className="col-span-24  mt-[54px] min-h-[18rem] px-0 md:col-span-18 md:px-[2.5rem]">
        <div className='flex items-center gap-2'>
          <span>Ajustes:</span>
          <input  type="range"
          className={`h-[2px] appearance-none rounded-xl ${actualTheme.rangeStyle}`}
        id="range"
        name="range"
        min={100}
        max={600}
        step={0.001}
        value={glyphSize}
        onChange={handleGlyphSize}
        />
          <Image alt="change_theme" src={'/icons/contrast-icon.svg'} className={actualTheme.glyphFilter} width={16} height={16} onClick={toggleTheme} />
        </div>
        <div className={` mt-[54px] max-w-[100%] break-all text-center font-happy md:text-left`} style={{fontSize: glyphSize}}>
          {inputText}
          </div>
        </div>

        <div className="col-span-24 mt-[54px]  hidden md:col-span-6 md:block">
        <main>
            
            <Link href="./happy-font-face.ttf" download>
              <div className="flex gap-2 md:items-center">
                Descargar <Image className={`${themes[theme!].glyphFilter}`} src="./icons/download-icon.svg" width="14" height="14" alt='download icon'/>
               </div>
            </Link>
            
          </main>
          <main className="mt-[56px]">
            <div>
              <div>Gramática</div>
              <div className="mt-[42px]"><KeyBoard keysPressed={keysPressed} actualPhase={actualPhase} isWrongType={isWrongType}/></div>
              <div className="py-4">
                {textsPhases[`textPhase${actualPhase}`]}
                <div className={isWrongType ? 'animate-fade-in' : 'hidden animate-fade-out'}>¡Introduce la tecla correcta!</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </motion.section>);
} 