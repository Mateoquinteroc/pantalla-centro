import {XMarkIcon} from '@heroicons/react/24/solid'
import React, { useContext, useEffect } from 'react';
import { CardSelectContext } from "./Context"
import QR from "../public/img/WhatsApp Image 2023-12-20 at 1.25.22 PM.jpeg"

const BotAI = () => {
    const Context = useContext(CardSelectContext)

    return (
        <aside className={` ${Context.isQrOpen ? 'flex' : 'hidden' } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 bg-slate-50/90 w-[90vw] h-[70vh] rounded-3xl z-10 overflow-x-hidden`}>
            <XMarkIcon className='absolute right-0 h-10 w-10 text-black-500 m-4 '
            onClick={() => Context.closeQr()}></XMarkIcon>
            <div className='grid grid-cols-2' > 
                <figure>
                    <img className='w-[35vh] top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2' src={QR}/>
                </figure>
                <p className=' top-1/2 transform translate-y-1/2 4xl:text-6xl text-xl font-open-sans'>Este código QR lleva a una conversación con un asistente chatbot con IA</p>
            </div>
        </aside>
    )
}

export default BotAI