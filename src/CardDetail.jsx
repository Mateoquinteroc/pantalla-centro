import { XMarkIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import React, { useContext, useEffect } from 'react';
import { CardSelectContext } from "./Context"


const CardDetail = ({ eventos }) => {
    const Context = useContext(CardSelectContext)


    const colors = "bg-red-600/50 bg-yellow-400/50 bg-blue-700/50 bg-orange-600/50 bg-rose-400";

    
    const selectorEvento = (eventodetallado) => {
        Context.setEventoSeleccionado(eventodetallado)
        Context.setEventSelect(eventodetallado)
        console.log(eventodetallado)
    }

    const siguienteCard = (event) => {
        
        event.preventDefault(); // Para evitar que el evento se propague y cause problemas

        const nextIndex = (Context.currentIndex + 1) % eventos.length;
        const nextEvent = eventos[nextIndex];
      
        Context.setCurrentIndex(nextIndex);
        Context.setEventSelect(nextEvent);
    }

    const anteriorCard = (event) => {
        event.preventDefault()

        const beforeIndex = (Context.currentIndex - 1 + eventos.length) % eventos.length;
        const beforeEvent = eventos[beforeIndex];
      
        Context.setCurrentIndex(beforeIndex);
        Context.setEventSelect(beforeEvent)
    }
    console.log(eventos)

    useEffect(() => {
    }, [Context.eventSelect])  



    return (
        
        <aside 
        className={` ${Context.isCardDetailOpen ? 'flex' : 'hidden'} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 3xl:-translate-y-[55%] mt-10 bg-slate-50/90 w-[90vw] h-[70vh] rounded-3xl z-10 overflow-x-hidden`}>
            <XMarkIcon className='absolute right-0 h-10 4xl:w-10 3xl:w-7 3xl:m-2 text-black-500 m-4 '
            onClick={() => Context.closeCardDetail()}></XMarkIcon>
            <ArrowSmallRightIcon className='absolute 4xl:w-11 3xl:w-7 right-0 mt-[30vh] transition-transform delay-300' onClick={(event) => siguienteCard(event)}></ArrowSmallRightIcon>
            <ArrowSmallLeftIcon className='absolute 4xl:w-11 3xl:w-7 l-0 mt-[30vh] transition-transform delay-300' onClick={(event) => anteriorCard(event)}></ArrowSmallLeftIcon>
            {Context.eventSelect && (
            <div className={` grid grid-cols-4 absolute top-0 right-0 inline-block 4xl:w-[85vw] 3xl:w-[85vw] 4xl:h-[65%] 3xl:h-[60%] inset-x-0 mx-auto m-10 rounded-3xl ${Context.eventSelect.color} transition ease-in-out delay-150 duration-700 active:-translate-x-[30vw]`} onClick={(event) => siguienteCard(event)}>
            <figure className='absolute col-start-1 row-span-4 ml-5 top-1/2 left-1 transform -translate-x-1 -translate-y-1/2'>
                <img src={Context.eventSelect.imagen} className=" ml-5 w-[19vw]" />
            </figure>
            <p className='col-start-2 row-start-1 4xl:text-6xl  text-2xl text-white font-bold font-open-sans 4xl:mt-[10%] ml-10  3xl:mt-1'>{Context.eventSelect.fecha}<br/>{Context.eventSelect.mes} </p>
            <p className='col-start-2 row-start-1 4xl:text-6xl  text-2xl text-white font-medium font-open-sans m-0  ml-10 4xl:mt-[40%] 3xl:mt-[25%]'>{Context.eventSelect.hora}</p>
            <p className='col-start-2 row-start-2 4xl:text-5xl  text-2xl text-white font-bold font-open-sans ml-10 w-fit'>{Context.eventSelect.titulo}</p>
            <p className='col-start-2 row-start-3 4xl:text-5xl  text-2xl text-white font-bold font-open-sans ml-10'>{Context.eventSelect.lugar}</p>
            <p className='col-start-2 row-start-4 4xl:text-5xl  text-2xl text-white font-medium font-open-sans ml-10 w-[40%]'>{Context.eventSelect.detalle}</p>
            {/* <h2 className='4xl:text-7xl text-3xl text-white font-medium bg-black mt-[10%] pl-2 pr-5 inline-block w-fit h-fit font-sans m-3 '>{Context.eventSelect.tipo}</h2> */}
            <h2 className='absolute left-[50%] -inset-y-10 w-auto 4xl:h-[80px] h-10 4xl:text-7xl 3xl:text-3xl text-3xl  text-white font-bold font-open-sans m-3 mt-[5%] '>Descripción</h2>
            <p className='absolute right-0 -inset-y-10 w-[45%] h-[70%] mt-[10%]  4xl:text-4xl text-xl  text-white font-medium font-open-sans mr-[5%] overflow-y-auto'>{Context.eventSelect.descripcion}</p>
            </div>
                )}
            <aside className={`fixed mr-10 3xl:p-2 3xl:bottom-1 4xl:ml-5 4xl:p-10 flex flex-rows  gap-1 bottom-5  w-[90vw] rigth-0 overflow-x-scroll  scroll-pl-2 snap-start`}>
            {eventos.map((evento, index) => (
                <div key={index} >
                    <div className={`transform 4xl:hover:-translate-y-10 3xl:hover:-translate-y-5 static h-fit 4xl:h-fit  p-5 rounded-sm  ${evento.color}`}
                    onClick={() => selectorEvento(evento)}
                    >
                    <h2 className='4xl:text-4xl text-md text-white font-medium bg-black pl-3 pr-5 m-1 4xl:mb-5 mb-1 4xl:ml-8 ml-2 w-auto font-open-sans rounded-sm line-clamp-1'>{evento.tipo}</h2>
                <p className='4xl:text-3xl text-xs text-black font-medium font-open-sans  4xl:mr-10 mr-5 4xl:ml-10 ml-1 line-clamp-1'>{evento.fecha}</p>
                <p className='4xl:text-3xl text-xs text-white font-medium 4xl:mr-10 mr-5 4xl:ml-10 ml-1 font-open-sans line-clamp-1'>{evento.hora}</p>
                <p className='4xl:text-3xl text-xs text-white font-medium font-open-sans 4xl:mr-10 mr-5 4xl:ml-10 ml-1 line-clamp-1'>{evento.titulo}</p>
                <p className='4xl:text-3xl text-xs text-white font-medium font-open-sans 4xl:mr-10 mr-5 4xl:ml-10 ml-1 line-clamp-1 '>{evento.lugar}</p>
                {/* <p className='line-clamp-1 4xl:text-3xl text-xs text-white font-medium font-open-sans 4xl:pb-[20%] pb-2 4xl:mr-10 mr-5 4xl:ml-10 ml-1'>{evento.detalle}</p> */}
                </div>
                

            </div>
            ))}
            </aside>
        </aside>
           
    )
}
export default CardDetail