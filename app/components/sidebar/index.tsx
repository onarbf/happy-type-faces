'use client'

import { useState } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function SideBar(){
    const [activePage, setActivePage] = useState(0);
    const pathname = usePathname()
    return <main>
        <ul>
            <li className="border-t-[1px] border-[] first:border-t-[0]">
            <Link href="/">
                <div className="flex items-center justify-between  py-3">
                   <span>Prueba</span>
                   <div className="flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full border border-pinky">
                        {pathname === '/' && <div className="min-h-[14px] min-w-[14px] rounded-full bg-pinky"></div>}
                   </div>
                </div>
            </Link>
            </li>
            <li className="border-t-[1px] border-pinky first:border-t-[0]">
            <Link href="/proyecto">
                <div className="flex items-center justify-between  py-3">
                   <span>Proyecto</span>
                   <div className="flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full border border-pinky">
                   {pathname === '/proyecto' && <div className="min-h-[14px] min-w-[14px]  rounded-full bg-pinky"></div>}
                   </div>
                </div>
                </Link>
            </li>
            <li className="border-t-[1px] border-pinky first:border-t-[0]">
            <Link href="/especimen">
                <div className="flex items-center justify-between  py-3">
                   <span>Especimen</span>
                   <div className="flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full border border-pinky">
                   {pathname === '/especimen' && <div className="min-h-[14px] min-w-[14px] rounded-full bg-pinky"></div>}
                   </div>
                </div>
            </Link>
            </li>
        </ul>
    </main>
}