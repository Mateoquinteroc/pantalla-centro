import React, { useEffect} from 'react';
import './App.css';
import CardDia from './CardDia';
import Data from './data.json';
import { CardSelectProvider } from "./Context"
import CardDetail from './CardDetail';
import PrincipalCard from './PrincipalCard';
import FooterCard from './FooterCard';
import Recorrido3d from './Recorrido3d';
import BotAI from './BotAI';
import touch from '../public/img/touch.png';
import { initGA, logEvent } from './analytics';

function App() {
  
  useEffect(() => {
    // Inicializar Google Analytics
    initGA();

    // Agregar un listener global para capturar clics
    const handleClick = (event) => {
      // Obtén el elemento que fue clickeado
      const target = event.target;

      // Verifica si el elemento tiene un id o una clase
      const elementInfo = target.id || target.className || target.tagName;

      // Enviar el evento de clic a Google Analytics
      logEvent('Click', 'User clicked on element', elementInfo);
    };

    // Añadir el evento global de clic
    document.addEventListener('click', handleClick);

    // Limpia el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const categorias = Object.values(Data);
  const eventos = Object.values(Data).flatMap(categoria => categoria);
  console.log (Data)

  return (
    <CardSelectProvider >
      <div className="bg-cover  bg-[url('../public/img/fondo.jpg')] h-screen  overflow-y-auto z-0 ">
      <img src={`${touch}`} className='absolute right-10 h-[15vh] bottom-[10vh] animate-bounce'/>
      <PrincipalCard className=" ml-[10%] mr-[10%] z-0 "/>
      <Recorrido3d />
      <BotAI/>
      <FooterCard/>
      <CardDetail eventos={eventos} />
        <div className='grid grid-cols-3 ml-[26%] mr-[26%] gap-x-[10px] gap-y-3 z-0'>
          
          {categorias.map((categoria, index) => (
            <CardDia key={index} categoria={categoria} />
            ))}
        </div>
      </div>
    </CardSelectProvider>
  );
}

export default App;
