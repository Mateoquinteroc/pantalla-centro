import {XMarkIcon} from '@heroicons/react/24/solid'
import React, { useContext, useEffect } from 'react';
import { CardSelectContext } from "./Context"

const Recorrido3d = (child) => {
    const Context = useContext(CardSelectContext)
    return (
        <aside className={` ${Context.isCardBaseDetailsOpen ? 'flex' : 'hidden' } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 bg-slate-50 w-[75vw] h-[70vh] rounded-3xl z-10 overflow-x-hidden`}>
            <XMarkIcon className='absolute right-0 h-10 w-10 3xl:w-7 3xl:m-2 text-black-500 m-4 '
            onClick={() => Context.closeCardBaseDetails()}></XMarkIcon>
            <div > 
                <iframe className='absolute w-[70vw] h-[60vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' title="CCU Sketchfab" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b4f7daadedef42be93fe679073983dbe/embed?annotations_visible=1"> </iframe> 
            </div>
        </aside>
    )
}

export default Recorrido3d