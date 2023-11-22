import Link from "next/link";

export default function Footer(){
    return(<footer className="sticky bottom-0  grid grid-cols-24 px-[2.5vw]">
        <div className="col-span-24 md:col-span-3"></div>

        <div className="col-span-24 grid grid-cols-24 md:col-span-21">

        <div className="col-span-24 md:col-span-18"></div>
        <div className="col-span-24 my-2 md:col-span-6">
            <ul className=" flex gap-2">
                <li>
                    <Link href="https://instagram.com/tina.hernando?igshid=MTk0NTkyODZkYg==">
                        01. Instagram
                    </Link>
                </li>
                <li>
                    <Link href="mailto:&#104;&#100;&#111;&#099;&#114;&#105;&#115;&#116;&#105;&#110;&#097;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
                        02. Contacto
                    </Link>
                </li>
            </ul>
        </div>
        </div>
        
    </footer>)
}


