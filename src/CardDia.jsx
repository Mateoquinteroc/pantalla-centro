import React, { useContext,} from 'react';
import './App.css';
import { CardSelectContext } from "./Context"
import PrincipalCard from './PrincipalCard'

const CardDia = ({ categoria }) => {
  const colors = [
    'bg-amarillo',
    'bg-azul',
    'bg-rojo',
    'bg-naranja',
    'bg-magenta'
  ];
  
  const Context = useContext(CardSelectContext)


  const verEventoSeleccionado = (eventoDetalle) => {
    Context.openCardDetail();
    Context.setEventSelect(eventoDetalle);
    console.log('evento seleccionado detallado', eventoDetalle);
    console.log('recargado');


  };



  return (
    <div className=' top-0 right-0 transform translate-y-1/4 '>
        <h2 className=' 4xl:text-6xl text-3xl text-white font-bold bg-black pl-3 inline-block w-[15vw] mt-5 mb-3  pb-3 font-open-sans sticky 3xl:pb-1'>{categoria[0].fecha}</h2>
        <div className='top-0 right-0  inline-block bg-black/70 w-[15vw] h-[30vh] p-1 mt-0 overflow-y-auto 3xl:h-[26vh]'>
    
      {categoria.map((evento, subIndex) => (

        <div key={subIndex}>
          <div className={`${categoria[subIndex].color} 4xl:w-[14vw] h-auto 4xl:p-3 mb-3 ml-5 mt-3 mix-blend-normal 3xl:w-[13vw] 3xl:p-1 3xl:ml-3`}
          onClick={() => {verEventoSeleccionado(categoria[subIndex]);
          }}>
            {/* <p className='4xl:text-3xl text-md text-white font-semibold font-sans'>{evento.fecha}</p> */}
            <p className='4xl:text-3xl text-md text-white font-open-sans font-bold '>{evento.titulo}</p>
            <p className='4xl:text-3xl text-md text-white -m-2 ml-0 font-open-sans font-light'>{evento.hora}</p>
            <p className='4xl:text-3xl text-md text-white -m-1 ml-0 font-open-sans font-normal'>{evento.lugar}</p>
            {/* <p className='4xl:text-3xl text-md text-white -m-1 ml-0 font-open-sans font-light'>{evento.detalle}</p> */}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default CardDia;

