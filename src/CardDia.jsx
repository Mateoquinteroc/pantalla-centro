import React, { useContext,} from 'react';
import './App.css';
import { CardSelectContext } from "./Context"
import PrincipalCard from './PrincipalCard'

const CardDia = ({ categoria }) => {
  const colors = "bg-red-600/50 bg-yellow-400/50 bg-blue-700/50";
  const color = categoria[0].color
  
  const Context = useContext(CardSelectContext)


  const verEventoSeleccionado = (eventoDetalle) => {
    Context.openCardDetail();
    Context.setEventSelect(eventoDetalle);
    console.log('evento seleccionado detallado', eventoDetalle);
    console.log('recargado');


  };


  return (
    <div 
    className={`top-0 right-0 ${color} inline-block w-auto h-[50vh] p-10 mt-0 overflow-y-auto `}
    onClick={() => {verEventoSeleccionado(categoria[0]);
    }}
    >
      <h2 className='4xl:text-6xl text-3xl text-white font-bold bg-black pl-2 pr-5 inline-block w-auto font-sans '>{categoria[0].tipo}</h2>
      {categoria.map((evento, subIndex) => (
        <div key={subIndex}>
          <p className='4xl:text-3xl text-md text-white font-semibold 4xl:mt-[10%] mt-5 font-sans'>{evento.fecha}</p>
          <p className='4xl:text-3xl text-md text-white -m-2 ml-0 font-sans font-light'>{evento.hora}</p>
          <p className='4xl:text-3xl text-md text-white font-sans font-bold '>{evento.titulo}</p>
          <p className='4xl:text-3xl text-md text-white -m-1 ml-0 font-sans font-normal'>{evento.lugar}</p>
          <p className='4xl:text-3xl text-md text-white -m-1 ml-0 font-sans font-light'>{evento.detalle}</p>
        </div>
      ))}
    </div>
  );
}

export default CardDia;

