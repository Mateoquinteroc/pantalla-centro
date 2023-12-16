import { XMarkIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import React, { useContext, useEffect } from 'react';
import { CardSelectContext } from "./Context"


const CardDetail = ({ eventos }) => {
    const Context = useContext(CardSelectContext)


    const colors = "bg-red-600/50 bg-yellow-400/50 bg-blue-700/50 bg-orange-600/50";

    
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

    useEffect(() => {
    }, [Context.eventSelect])  



    return (
        
        <aside 
        className={` ${Context.isCardDetailOpen ? 'flex' : 'hidden'} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-50/90 w-[90vw] h-[90vh] rounded-3xl z-10 overflow-x-hidden`}>
            <XMarkIcon className='absolute right-0 h-10 w-10 text-black-500 m-4 '
            onClick={() => Context.closeCardDetail()}></XMarkIcon>
            <ArrowSmallRightIcon className='absolute w-11 right-0 mt-[50vh] transition-transform delay-300' onClick={(event) => siguienteCard(event)}></ArrowSmallRightIcon>
            <ArrowSmallLeftIcon className='absolute w-11 l-0 mt-[50vh] transition-transform delay-300' onClick={(event) => anteriorCard(event)}></ArrowSmallLeftIcon>
            {Context.eventSelect && (
            <div className={`absolute top-0 right-0 inline-block w-[80vw] h-[65%] inset-x-0 mx-auto my-10 rounded-3xl ${Context.eventSelect.color} transition ease-in-out delay-150 duration-700 active:-translate-x-[30vw]`} onClick={(event) => siguienteCard(event)}>
            <h2 className='4xl:text-7xl text-3xl text-white font-medium bg-black mt-[10%] pl-2 pr-5 inline-block w-auto font-sans m-3 '>{Context.eventSelect.tipo}</h2>
            <p className='4xl:text-6xl text-2xl text-white font-medium font-sans mt-[50px] ml-5'> Fecha: {Context.eventSelect.fecha}</p>
            <p className='4xl:text-6xl text-2xl text-white font-medium m-0  font-sans ml-5 '>Hora: {Context.eventSelect.hora}</p>
            <p className='4xl:text-6xl text-2xl text-white font-medium font-sans ml-5 w-[30%]'>Titulo: {Context.eventSelect.titulo}</p>
            <p className='4xl:text-6xl text-2xl text-white font-medium font-sans ml-5'>Lugar: {Context.eventSelect.lugar}</p>
            <p className='4xl:text-6xl text-2xl text-white font-medium font-sans ml-5 w-[30%]'>{Context.eventSelect.detalle}</p>
            <h2 className='absolute left-[50%] -inset-y-10 w-auto 4xl:h-[80px] h-10 4xl:text-7xl text-3xl text-white font-medium bg-black font-sans m-3 mt-[10%] ml-3'>Descripcion</h2>
            <p className='absolute right-0 -inset-y-10 w-[40%] h-auto mt-[15%] 4xl:text-5xl text-2xl text-white font-medium font-sans mr-[10%]'>{Context.eventSelect.descripcion}</p>
            </div>
                )}
            <aside className={`fixed mr-10 ml-5 p-10 flex flex-rows items-center justify-center gap-1 bottom-5  w-[90vw]  overflow-x-scroll  scroll-pl-2`}>
            {eventos.map((evento, index) => (
                <div key={index} >
                    <div className={`transform hover:-translate-y-10 static h-[150px] 4xl:h-[300px] rounded-sm  ${evento.color}`}
                    onClick={() => selectorEvento(evento)}
                    >
                    <h2 className='4xl:text-4xl text-md text-white font-medium bg-black pl-3 pr-5 m-1 4xl:mb-5 mb-1 4xl:ml-8 ml-2 w-auto font-sans rounded-sm line-clamp-1'>{evento.tipo}</h2>
                <p className='4xl:text-3xl text-xs text-black font-medium font-sans  4xl:mr-10 mr-5 4xl:ml-10 ml-1 line-clamp-1'>{evento.fecha}</p>
                <p className='4xl:text-3xl text-xs text-white font-medium 4xl:mr-10 mr-5 4xl:ml-10 ml-1 font-sans line-clamp-1'>{evento.hora}</p>
                <p className='4xl:text-3xl text-xs text-white font-medium font-sans 4xl:mr-10 mr-5 4xl:ml-10 ml-1 line-clamp-1'>{evento.titulo}</p>
                <p className='4xl:text-3xl text-xs text-white font-medium font-sans 4xl:mr-10 mr-5 4xl:ml-10 ml-1 line-clamp-1 '>{evento.lugar}</p>
                <p className='line-clamp-1 4xl:text-3xl text-xs text-white font-medium font-sans 4xl:pb-[20%] pb-2 4xl:mr-10 mr-5 4xl:ml-10 ml-1'>{evento.detalle}</p>
                </div>
                

            </div>
            ))}
            </aside>
        </aside>
           
    )
}
export default CardDetail