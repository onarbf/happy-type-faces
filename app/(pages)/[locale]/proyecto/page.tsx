'use client'
import LetterExpositor from "@/app/components/letter-expositor";
import SideBar from "@/app/components/sidebar";
import Lottie from 'react-lottie-player'

import cuadratin from '@/app/animations/cuadratin.json'
import teclado from '@/app/animations/teclado.json'
import ligaduras1 from '@/app/animations/ligaduras01.json'
import ligaduras2 from '@/app/animations/ligaduras02.json'
import kerning from '@/app/animations/kerning.json'
import { motion } from "framer-motion"

export default function Proyecto() {
  const variants = {
    hidden: { opacity: 0, y:'20px' },
    visible: { opacity: 1, y:'0' },
  }

  return ( <motion.section className="mx-[2.5vw]"
  initial="hidden"
  animate="visible"
  variants={variants}
  transition={{ duration: 0.8 }}>
      <div className="mt-[3rem] grid grid-cols-24 gap-4">
        <div className="col-span-24 hidden md:col-span-3 md:block">
          <SideBar />
        </div>
        {/* COl 2 */}

        <div className="col-span-24 grid grid-cols-24 md:col-span-21">
          
          <div className="col-span-24 grid min-h-[6rem] grid-cols-24 md:col-span-18">
            {/* COLuMN * TITLE */}
            <div className="col-span-24 grid grid-cols-24">
              <div className="col-span-24 pl-[0] md:col-span-6  md:pl-[12px]">
                Metatipografía
              </div>
              <div className="col-span-24 md:col-span-16 ">
                <p><i>Happy(type)faces</i> es un sistema modular que mediante combinaciones de teclado nos permite generar ilustraciones de diferentes expresiones. Una metatipografía utiliza el modelo de escritura y las posibilidades de los programas para generar un sistema que permita combinar diferentes piezas mediante una serie de reglas o gramática con el objetivo de generar una tipografía que en vez de escribir palabras te permite formar diferentes elementos gráficos, ya sean ilustraciones, símbolos, etc.</p>
              </div>
            </div>
             {/* COLuMN * TITLE  END*/}
             {/* COLuMN * TITLE */}
            <div className="col-span-24 mt-2 grid grid-cols-24">
              <div className="col-span-24 pl-[0] md:col-span-6">
                Glifos
              </div>
              <div className="col-span-24  md:col-span-16 ">
              <div className="flex flex-col gap-[32px] md:flex-row">
                <div className="w-[90%] flex-col md:w-[45%]">
                  <div className=" flex aspect-square ">
                    <LetterExpositor type={0} facePart={'eyeRight'} values={['1','2','3','4','5','6','7','8','9','0','q','w','e','r','t','y']}/>
                  </div>
                  <div className=" mt-[32px] flex aspect-[4/1]">
                    <LetterExpositor type={0} facePart={'eyeRight'} values={['u','i','o','']}/>
                  </div>
                  <div className="mt-2">Ojo Der.</div>
                </div> 

                <div className="w-[90%] flex-col md:w-[45%]">
                  <div className=" flex aspect-square ">
                    <LetterExpositor type={1} facePart={'eyeLeft'} values={['a','s','d','f','g','h','j','k','l','ñ','z','x','c','v','b','n']}/>
                  </div>
                  <div className=" mt-[32px] flex aspect-[4/1]">
                    <LetterExpositor type={1} facePart={'eyeLeft'} values={['m']}/>
                  </div>
                  <div className="mt-2">Ojo Izq.</div>
                </div> 

              </div>

              <div className="mt-4 flex flex-col gap-4 md:flex-row">
                <div className="w-[90%] flex-col md:w-[45%]">
                  <div className=" flex aspect-[4/3] ">
                    <LetterExpositor type={0} facePart={'nose'} values={['Q','W','E','R','T','Y','U','I','O']}/>
                  </div>
                  <div className="mt-2">Nariz</div>
                </div>  

              </div>

              <div className="mt-4 flex flex-col gap-4 md:flex-row">
                <div className="w-[90%] flex-col md:w-[45%]">
                  <div className=" flex aspect-[4/3] ">
                    <LetterExpositor type={1} facePart={'mouth'} values={['A','S','D','F','G','H','J','K','L','Ñ']}/>
                  </div>
                  <div className="mt-2">Boca</div>
                </div> 
              </div>

              <div className="mt-4 flex flex-col gap-4 md:flex-row">
                <div className="w-[90%] flex-col md:w-[45%]">
                  <div className=" flex aspect-[4/2] ">
                    <LetterExpositor  facePart={'face'} values={['Z','X','C','V','B','N','M']}/>
                  </div>
                  <div className="mt-2">Cara</div>
                </div>  

              </div>


              </div>
            </div>
             {/* COLuMN * TITLE  END*/}
             {/* COLuMN * TITLE */}
            <div className="col-span-24 mt-4 grid grid-cols-24">
              <div className="col-span-24 pl-[0] md:col-span-6 ">
                Proyecto
              </div>
              <div className="col-span-24 md:col-span-16">
                <p>Happy(type)faces fue un taller de metatipografía que tenia como objetivo explorar diferentes posibilidades a través del modelo tipográfico. Durante ese taller generamos un sistema modular que nos permitiera crear ilustraciones. A partir del proyecto que realicé durante ese taller fui completando los glifos y trabajando en las diferentes combinaciones, a medida que el proyecto evolucionaba la gramática se fue variando con el fin de dar cabida a todos los nuevos caracteres.  El nombre de la fuente lo heredé del taller que sirvió como base para este proyecto.</p>
              </div>
            </div>
             {/* COLuMN * TITLE  END*/}

             {/* COLuMN * TITLE */}
            <div className="col-span-24 mt-4 grid grid-cols-24">
              <div className="col-span-24 pl-[0] md:col-span-6 ">
                Cuadratín
              </div>
              <div className="col-span-24 md:col-span-16">
                <p>Todos los cajetines de los diferentes glifos tienen las mismas dimensiones, 1.000 x 1.000px. Al tener la misma superficie nos permite aplicar un <i>kerning</i> negativo del -100% a los diferentes grupos permitiendo la superposición de las diferentes partes del cuerpo. </p>
                <div className="flex items-center justify-center py-8">
                  <Lottie
                    loop
                    animationData={kerning}
                    play
                    className="w-[100%] "
                  />
                </div>
                <p>Una vez establecidas las dimensiones del cuadratín mediante un esquema se define la posición que ocupará los elementos principales de tu tipografía, en este caso se dividió el cajetín en cinco partes: ojo derecho, ojo izquierdo, nariz, boca y forma de la cara. Dentro de cada grupo las piezas solo pueden ocupar el área que se había asignado de forma que al aplicar el kerning negativo se superpongan correctamente y permita la combinación con los diferentes caracteres.</p>
                <div className="flex items-center justify-center py-8">
                  <Lottie
                    loop
                    animationData={cuadratin}
                    play
                    className="aspect-square w-[40%] "
                  />
                </div>
              </div>
            </div>
            <div className="col-span-24 mt-4 grid grid-cols-24">
              <div className="col-span-24 pl-[0] md:col-span-6 ">
                Disposición del teclado
              </div>
              <div className="col-span-24  md:col-span-16">
                <p>Un elemento fundamental a la hora de generar una metatipografía es definir la disposición de los glifos en el teclado, en este paso se determinará las reglas o gramatica de tu fuente. Al ser un sistema que no estamos acostumbrados a usar debemos pensar en un orden que el usuario pueda asimilar de la forma más sencilla posible.</p>
                <p>Durante el taller se establecio una fila del teclado por cada grupo, a medida que aumentaron los glifos este sistema se fue quedando pequeño de forma que tocó repensar el sistema manteniendolo como base. Para ello se siguió usando las filas del teclado pero esta vez asignando una fila o dos dependiendo del numero de caracteres que contuviera cada grupo y combinandolo con un sistema de ligaduras con el fin de ofrecer la mayor combinación posible.</p>
                <div className="flex items-center justify-center ">
                  <Lottie
                    loop
                    animationData={teclado}
                    play
                    className=" w-[100%] "
                  />
                </div>
              </div>
            </div>
            <div className="col-span-24 mt-4 grid grid-cols-24">
              <div className="col-span-24 md:col-span-6">
                Ligaduras
              </div>
              <div className="col-span-24 md:col-span-16">
                <p>Las ligaduras surgen de la combinación de varias letras previamente establecidas, como resultado obtenemos un glifo completamente nuevo. Estos comportamientos se definen previamente durante el proceso de digitalización, de forma que se genera una serie de reglas que establece que letras deben reaccionar al teclearse de una manera determinada.</p>
                <p>Durante el desarrollo de la fuente me encontre que algunas partes del cuerpo tenia más piezas que los espacios que tenia asignados en el teclado, con el fin de encontrar espacio donde colocar esas piezas recurrí al sistema de ligaduras, de forma que en algunos caracteres existe la posibilidad de desbloquear variables pulsando repedimante la misma letra hasta 2 o 3 veces.</p>
                <div className="flex items-center justify-center gap-2 py-8">
                  <Lottie
                    loop
                    animationData={ligaduras1}
                    play
                    className="aspect-square w-[40%] "
                  />
                  <Lottie
                    loop
                    animationData={ligaduras2}
                    play
                    className="aspect-square w-[40%] "
                  />
                </div>
              </div>
            </div>
          </div>
         
          <div className="col-span-24 md:col-span-6">
            <main>
            <div className="flex flex-col gap-1">
                <h4> Licencia</h4>
                <p><u>Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)</u></p>
              </div>
              <br/>
              <div className="mt-4 flex flex-col gap-1">
                <h4> Créditos</h4>
                <p>Happy (type) faces es un proyecto desarrollado durante un taller de la escuela de verano de Arte10 ​​​​​​​impartido por Rubén Chumillas en 2016.</p>
              </div>
              <br/>
              <div className="mt-4 flex flex-col gap-1">
                <h4> Directora de Arte: </h4>
                <p className="italic">Cristina Hernando</p>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <h4>Desarrollador web: </h4>
                <p className="italic">Onar Berrade</p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </motion.section>)
}