import React from 'react';
import './App.css';
import CardDia from './CardDia';
import Data from './data.json';
import { CardSelectProvider } from "./Context"
import CardDetail from './CardDetail';
import PrincipalCard from './PrincipalCard';
import FooterCard from './FooterCard';
import Recorrido3d from './Recorrido3d';
import BotAI from './BotAI';

function App() {
  const categorias = Object.values(Data);
  const eventos = Object.values(Data).flatMap(categoria => categoria);

  return (
    <CardSelectProvider >
      <div className="bg-cover  bg-[url('../public/img/fondo.jpg')] h-screen  overflow-y-auto z-0 ">
      <PrincipalCard className="3 ml-[10%] mr-[10%] z-0 "/>
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
