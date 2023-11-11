import SideBar from "@/app/components/sidebar";


export default function Proyecto() {
  return (
    <section className="mx-[2.5vw]">
      <div className="mt-[3rem] grid grid-cols-24 gap-4">
        <div className="col-span-24 md:col-span-3">
          <SideBar />
        </div>
        {/* COl 2 */}
        <div className="col-span-24 grid grid-cols-24 border md:col-span-21">
          {/* COLuMN * TITLE */}
          <div className="col-span-24 grid min-h-[6rem] grid-cols-24 border md:col-span-16">
            <div className="col-span-4 border ">
              Metatipografía
            </div>
            <div className="col-span-20 border">
          <p>Happy(type)faces es un sistema modular que mediante combinaciones de teclado nos permite generar ilustraciones de diferentes expresiones. Una metatipografía utiliza el modelo de escritura y las posibilidades de los programas para generar un sistema que permita combinar diferentes piezas mediante una serie de reglas o gramática con el objetivo de generar una tipografía que en vez de escribir palabras te permite formar diferentes elementos gráficos, ya sean ilustraciones, símbolos, etc.</p>
            </div>
          </div>
          {/* COLuMN * TITLE  END*/}
          <div className="col-span-24 border md:col-span-8">
            <main>
              <div>
                <h4> Licencia</h4>
                <p>Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)</p>
              </div>

              <div>
                <h4> Créditos</h4>
                <p>Happy (type) faces es un proyecto desarrollado durante un taller de la escuela de verano de Arte10 ​​​​​​​impartido por Rubén Chumillas en 2016.</p>
              </div>

              <div>
                <h4> Diseñadora: </h4>
                <p className="italic">Cristina Hernando</p>
              </div>

              <div>
                <h4> Desarrollador Web: </h4>
                <p className="italic">Onar Berrade</p>
              </div>



            </main>
          </div>
        </div>
      </div>
    </section>)
}