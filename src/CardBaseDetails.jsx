import React, { useContext, useEffect } from 'react';
import { CardSelectContext } from "./Context"


const cardBaseDetails = ({child}) => {
    const Context = useContext(CardSelectContext)
    return (
        <aside className={` ${Context.isCardBaseDetailsOpen ? 'flex' : 'hidden' } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 bg-slate-50/90 w-[90vw] h-[70vh] rounded-3xl z-10 overflow-x-hidden`}>
            
        </aside>
    )

} 

export default cardBaseDetails