import SideBar from "@/app/components/sidebar";


export default function Proyecto(){
    return (  <section className="mx-[2.5vw] text-pinky">
    <div> Hapy (Type) Faces</div>
    <div className="mt-[3rem] grid grid-cols-24 gap-4">
      <div className="col-span-2">
        <SideBar/>
      </div>
      <div className="col-span-22">
        proyecto
      </div>
    </div>
  </section>)
}