import Link from "next/link";

export default function Footer(){
    return(<footer className="mx-[2.5vw] flex items-center justify-end">
        <div>
            <ul className="flex gap-2">
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
    </footer>)
}


