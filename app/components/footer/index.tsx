import Link from "next/link";

export default function Footer(){
    return(<footer className="grid grid-cols-24 px-[2.5vw]">
        <div className="col-span-24 md:col-span-3"></div>

        <div className="col-span-24 grid grid-cols-24 md:col-span-21">

        <div className="col-span-24 md:col-span-18"></div>
        <div className="col-span-24 md:col-span-6">
            <ul className=" flex gap-2">
                <li>
                    <Link href="#">
                        01. Instagram
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        02. Contacto
                    </Link>
                </li>
            </ul>
        </div>
        </div>
        
    </footer>)
}


