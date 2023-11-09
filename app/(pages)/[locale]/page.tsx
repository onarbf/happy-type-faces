'use client'
import KeyBoard from '@/app/components/keyboard';
import SideBar from '@/app/components/sidebar';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export  default function Index() {
  const [inputText, setInputText] = useState('');
  const [keysPressed, setKeysPressed] = useState({});
  const [lastKeyAdded, setLastKeyAdded] = useState('');
 
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if(event.key.length === 1){
        setInputText(prevInput=>(prevInput + event.key));
      }
      if( event.keyCode=== 8){
        setInputText(prevInput=>{
          return prevInput.slice(0,-1)});
      }
      setKeysPressed(prevKeys => ({ ...prevKeys, [event.keyCdoe]: true })); 
    };
    const handleKeyUp = (event: any) => {
      setKeysPressed(prevKeys => ({ ...prevKeys, [event.key]: false }));
      setLastKeyAdded(event.key)
    };


    // Add event listener
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Remove event listener on cleanup
    return () =>{ 
      window.removeEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    }
  },[])
  
  console.log(keysPressed)
  return (
  <section className="mx-[2.5vw]">
    <div className="mt-[3rem] grid grid-cols-24 gap-4">
      <div className="col-span-3">
        <SideBar/>
      </div>
      <div className="col-span-21 grid grid-cols-24">
        <div className="col-span-24 min-h-[6rem] px-[2.5rem]">
          <p>Escribe tu texto:</p>
          <div className="text-[3rem]">
            {inputText}
          </div>
        </div>
        <div className="col-span-18 px-[2.5rem]">
        <div className=''>Ajustes</div>
        <div className="font-happy text-[12rem]">
            {inputText}
          </div>
        </div>
        <div className="col-span-6">
          <main>
            <div>
              <Link href="#">Descargar </Link>
            </div>
            <div>
              <KeyBoard keysPressed={keysPressed}/>
            </div>
          </main>
        </div>
      </div>
    </div>
  </section>);
} 