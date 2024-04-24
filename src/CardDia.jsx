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
    'bg-magenta',
    'bg-azuloscuro',
    'bg-violeta'
  ];
  
  const Context = useContext(CardSelectContext)


  const verEventoSeleccionado = (eventoDetalle) => {
    Context.openCardDetail();
    Context.setEventSelect(eventoDetalle);
    console.log('evento seleccionado detallado', eventoDetalle);
    console.log('recargado');


  };



  return (
    <div className=' top-0 right-0 transform translate-y-[10%] 4xl:translate-y-1/4 '>
        <h2 className=' 4xl:text-5xl text-s text-white font-bold bg-black pl-3 inline-block w-[15vw]  mt-5 mb-2  pb-1 font-open-sans sticky 3xl:pb-1 rounded-t-[25px]'>{categoria[0].fecha}</h2>
        <div className='top-0 right-0  inline-block bg-black/70 w-[15vw]  h-[25vh] p-0 m-0 overflow-y-auto rounded-b-[25px]'>
    
      {categoria.map((evento, subIndex) => (

        <div key={subIndex}>
          <div className={`${categoria[subIndex].color} 4xl:w-[14vw] 3xl:w-[10vw] w-[13vw] h-auto 4xl:p-3  4xl:mb-3 mb-1 ml-1 4xl:mt-3 mt-1 mix-blend-normal  3xl:p-1 3xl:ml-3 translate-x-[2%] 4xl:translate-x-1`}
          onClick={() => {verEventoSeleccionado(categoria[subIndex]);
          }}>
            {/* <p className='4xl:text-3xl text-md text-white font-semibold font-sans'>{evento.fecha}</p> */}
            <p className='4xl:text-3xl text-[12px] text-white 4xl:p-1 p-0 m-1 font-open-sans font-bold '>{evento.titulo}</p>
            <p className='4xl:text-3xl text-[12px] text-white 4xl:p-2 p-0 ml-1 font-open-sans font-light'>{evento.hora}</p>
            <p className='4xl:text-3xl text-[12px] text-white 4xl:p-2 p-0 ml-1 font-open-sans font-normal'>{evento.lugar}</p>
            {/* <p className='4xl:text-3xl text-md text-white -m-1 ml-0 font-open-sans font-light'>{evento.detalle}</p> */}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default CardDia;

