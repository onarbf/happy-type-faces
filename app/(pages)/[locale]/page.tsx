'use client'
import KeyBoard from '@/app/components/keyboard';
import SideBar from '@/app/components/sidebar';
import { keys } from '@/app/constants/keys';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export  default function Index() {
  const [inputText, setInputText] = useState('');
  const [keysPressed, setKeysPressed] = useState({});
  const [actualPhase, setActualPhase] = useState(1)

  
console.log(typeof inputText)
  
  
  useEffect(() => {
    console.log('actualPhase',actualPhase)
    const acceptedValues = {
      phase1: [keys.q,keys.w,keys.e,keys.r,keys.t,keys.y,keys.u,keys.i,keys.o,keys.p,keys[1],keys[2],keys[3],keys[4],keys[5],keys[6],keys[7],keys[8],keys[9],keys[0]],
      phase2: [keys.a,keys.s,keys.d,keys.f,keys.g,keys.h,keys.j,keys.k,keys.l,keys.ñ,keys.z,keys.x,keys.c,keys.v,keys.b,keys.n,keys.m,keys[8],keys[9],keys[0]],
      phase3: [],
      phase4: []
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
      }
     
      if(actualPhase === 2 && acceptedValues.phase2.includes(event.key)){
        setInputText(prevInput=>(prevInput + event.key));
        updatePhase()
      }
  
      if(actualPhase === 3 && event.key === event.key.toUpperCase() && acceptedValues.phase1.slice(0,10).includes(event.key.toLowerCase())){  
        setInputText(prevInput=>(prevInput + event.key));
        updatePhase()
      }
  
      if(actualPhase === 4 && event.key === event.key.toUpperCase() && acceptedValues.phase2.slice(0,10).includes(event.key.toLowerCase())){  
        setInputText(prevInput=>(prevInput + event.key));
        updatePhase()
      }
      if(actualPhase === 5 && event.key === event.key.toUpperCase() && acceptedValues.phase2.slice(10,acceptedValues.phase2.length-1).includes(event.key.toLowerCase())){  
        setInputText(prevInput=>(prevInput + event.key));
        updatePhase()
      }
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
      <div className="col-span-3">
        <SideBar/>
      </div>
      <div className="col-span-21 grid grid-cols-24">
        <div className="col-span-24 min-h-[6rem] border px-[2.5rem]">
          <p>Escribe tu texto:</p>
          <div className="py-2 text-[3rem]">
            <input className="border-b-[2px] border-pinky " type="text" value={`${inputText}`} />
          </div>
        </div>
        <div className="col-span-24 min-h-[18rem] border px-[2.5rem] md:col-span-16">
        <div className=''>Ajustes</div>
        <div className="break-all font-happy text-[12rem]">
            {inputText}
          </div>
        </div>
        <div className="col-span-24 md:col-span-8">
          <main>
            <div>
              <Link href="#">Descargar </Link>
            </div>
            <div>
              <KeyBoard keysPressed={keysPressed} actualPhase={actualPhase}/>
            </div>
          </main>
        </div>
      </div>
    </div>
  </section>);
} 