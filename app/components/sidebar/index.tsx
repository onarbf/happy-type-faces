'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link";
import { useGlobalContext } from '@/app/context/store';
import themes from '@/app/constants/themes';

export default function SideBar(){
    const {theme} = useGlobalContext();
    const pathname = usePathname()
    return <main>
        <ul>
            <li className="border-t-[1px] border-[] first:border-t-[0]">
            <Link href="/">
                <div className="flex items-center justify-between  py-3">
                   <span>Prueba</span>
                   <div className={`flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full border`}>
                        {pathname === '/' && <div className={`min-h-[14px] min-w-[14px] rounded-full  ${themes[theme!] ? themes[theme!].bgCheckboxColor : 'bg-pinky'}`}></div>}
                   </div>
                </div>
            </Link>
            </li>
            <li className={`border-t-[1px] ${themes[theme!] ? themes[theme!].borderColor: 'border-pinky'} first:border-t-[0]`}>
            <Link href="/proyecto">
                <div className="flex items-center justify-between  py-3">
                   <span>Proyecto</span>
                   <div className={`flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full border ${themes[theme!] ? themes[theme!].borderColor: 'border-pinky'}`}>
                   {pathname === '/proyecto' && <div className={`min-h-[14px] min-w-[14px]  rounded-full ${themes[theme!] ? themes[theme!].bgCheckboxColor: 'bg-pinky'}`}></div>}
                   </div>
                </div>
                </Link>
            </li>
            <li className={`border-t-[1px] ${themes[theme!] ? themes[theme!].borderColor: 'border-pinky'} first:border-t-[0]`}>
            <Link href="/especimen">
                <div className="flex items-center justify-between  py-3">
                   <span>Especimen</span>
                   <div className={`flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full border ${themes[theme!] ?  themes[theme!].borderColor: 'border-pinky'}`}>
                   {pathname === '/especimen' && <div className={`min-h-[14px] min-w-[14px] rounded-full ${themes[theme!] ? themes[theme!].bgCheckboxColor: 'bg-pinky'}`}></div>}
                   </div>
                </div>
            </Link>
            </li>
        </ul>
    </main>
}