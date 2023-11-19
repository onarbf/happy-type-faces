'use client'
import { motion } from "framer-motion"
import SideBar from "@/app/components/sidebar"
import Image from "next/image"


export default function Especimen() {
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
            
            <div className="col-span-24 grid min-h-[6rem] grid-cols-24 p-8 md:col-span-18">
                <div className="col-span-24">
                    <video 
                        autoPlay 
                        loop 
                        muted
                    >
                        <source src="./media/especimen_video_desktop.mp4" type="video/mp4" />
                        Tu navegador no soporta videos HTML5.
                    </video>
                </div>
                <div className="col-span-24 mt-8">
                    {/* <Image src="./media/especimen_catalogo.svg" height={300} width={300} className="h-[100%] w-[100%]" alt="especimen-catalogo"/> */}
                    <p className="text-center font-happy text-[54px] md:text-[270px]">
                    8kIÑMynnYJJZogRHM
6hWFFZ4fEDDVtgIGX
7jEHM2dQLC2zYDDV
qzEDVwdRGBo,YLZ
tbOHCynWL:uubIJM
ttcUHHMumYDDC1aTGV
1aaRDDN0lOJMuuvUKX
uummYLM9lEAZo.TLV
fUKK:1aaRGV7jTDD:
ttbbOHHXi,WÑVo.EL;
                    </p>
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