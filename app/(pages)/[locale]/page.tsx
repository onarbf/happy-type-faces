'use client'
import KeyBoard from '@/app/components/keyboard';
import SideBar from '@/app/components/sidebar';
import { keys } from '@/app/constants/keys';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export  default function Index() {
  const [inputText, setInputText] = useState('');
  const [keysPressed, setKeysPressed] = useState({});
  const [actualPhase, setActualPhase] = useState(1);
  const [isWrongType, setIsWrongType] = useState(false);
  const textsPhases : any = {
    textPhase1: "1- Elije una tecla de la fila de los números o la primera fila de letras",
    textPhase2: "2- Ahora una letra de la segunda o la tercera fila para añadir el segundo ojo",
    textPhase3: "3- Vamos con las mayúsculas de la primera fila, ya verás que naricilla más mona!",
    textPhase4: "4- Añade una boca con las mayúsculas de la segunda fila",
    textPhase5: "5- Ya lo tienes! Solo falta la cara. Usa las mayúsculas de la tercera fila."
  }

  useEffect(() => {
    let timer: any;
    if (isWrongType) {
      timer = setTimeout(() => setIsWrongType(false), 3000); // Duración total de la animación
    }

    return () => clearTimeout(timer); // Limpiar el timer
  }, [isWrongType]);

  useEffect(() => {
    const acceptedValues = {
      phase1: [keys.q,keys.w,keys.e,keys.r,keys.t,keys.y,keys.u,keys.i,keys.o,keys.p,keys[1],keys[2],keys[3],keys[4],keys[5],keys[6],keys[7],keys[8],keys[9],keys[0]],
      phase2: [keys.a,keys.s,keys.d,keys.f,keys.g,keys.h,keys.j,keys.k,keys.l,keys.ñ,keys.z,keys.x,keys.c,keys.v,keys.b,keys.n,keys.m,keys[8],keys[9],keys[0]],
    }

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

    const handleInput = (event: any)=>{
      if(actualPhase === 1 && acceptedValues.phase1.includes(event.key)){
        setInputText(prevInput=>(prevInput + event.key));
        updatePhase()
        return
      }
     
      if(actualPhase === 2 && acceptedValues.phase2.includes(event.key)){
        setInputText(prevInput=>(prevInput + event.key));
        updatePhase()
        return
      }
  
      if(actualPhase === 3 && event.key === event.key.toUpperCase() && acceptedValues.phase1.slice(0,10).includes(event.key.toLowerCase())){  
        setInputText(prevInput=>(prevInput + event.key));
        updatePhase()
        return
      }
  
      if(actualPhase === 4 && event.key === event.key.toUpperCase() && acceptedValues.phase2.slice(0,10).includes(event.key.toLowerCase())){  
        setInputText(prevInput=>(prevInput + event.key));
        updatePhase()
        return
      }
      if(actualPhase === 5 && event.key === event.key.toUpperCase() && acceptedValues.phase2.slice(10,acceptedValues.phase2.length-1).includes(event.key.toLowerCase())){  
        setInputText(prevInput=>(prevInput + event.key));
        updatePhase()
        return
      }
      setIsWrongType(true)
    }

    const handleKeyDown = (event: any) => {
      if(event.key.length === 1){
        handleInput(event)
      }
      if( event.keyCode=== 8){
        setInputText(prevInput=>{
          return prevInput.slice(0,-1)});
        backPhase();
      }
      setKeysPressed(prevKeys => ({ ...prevKeys, [event.code]: true })); 
    };
    const handleKeyUp = (event: any) => {
      setKeysPressed(prevKeys => ({ ...prevKeys, [event.code]: false }));
    };


    // Add event listener
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Remove event listener on cleanup
    return () =>{ 
      window.removeEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    }
  },[actualPhase])
  return (
  <section className="mx-[2.5vw]">
    <div className="mt-[3rem] grid grid-cols-24 gap-4">
      <div className="col-span-24 md:col-span-3">
        <SideBar/>
      </div>
      <div className="col-span-24 grid grid-cols-24 md:col-span-21">
        <div className="col-span-24 min-h-[6rem] md:col-span-16 md:px-[2.5rem]">
          <p className='pt-3'>Escribe tu texto:</p>
          <div className="py-2 text-[3rem]">
            <input className="max-w-[100%] border-b-[2px] border-pinky" type="text" value={`${inputText}`} readOnly/>
          </div>
        </div>

        <div className="col-span-24 py-3  md:col-span-8">
          <main>
            <div  onClick={()=>setIsWrongType(true)} className="flex gap-2 md:items-center">
             Descargar <Link href="#"> <Image src="./icons/download-icon.svg" width="20" height="20" alt='download icon'/></Link>
            </div>
          </main>
        </div>

        <div className="col-span-24 min-h-[18rem] px-0 md:col-span-16 md:px-[2.5rem]">
        <div className=''>Ajustes</div>
        <div className="break-all font-happy text-[12rem]">
            {inputText}
          </div>
        </div>
        <div className="col-span-24 md:col-span-8">
          <main>
            <div>
              <div>Gramática</div>
              <div className={isWrongType ? 'animate-fade-in' : 'hidden animate-fade-out'}>Introduce la tecla correcta!</div>
              <KeyBoard keysPressed={keysPressed} actualPhase={actualPhase} isWrongType={isWrongType}/>
              <div className="p-4">
                {textsPhases[`textPhase${actualPhase}`]}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </section>);
} 