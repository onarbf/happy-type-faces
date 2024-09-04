'use client'
import { useState } from "react"

export default function MobileAlert(){
    const [isOpen, setIsOpen] = useState(true)
    return(<section className="">
        <p>Es recomendable que pruebes la experiencia en un ordenador</p>
    </section>)
}