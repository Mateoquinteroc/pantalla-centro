import React from 'react';
import './App.css';
import CardDia from './CardDia';
import Data from './data.json';
import { CardSelectProvider } from "./Context"
import CardDetail from './CardDetail';
import PrincipalCard from './PrincipalCard';

function App() {
  const categorias = Object.values(Data);
  const eventos = Object.values(Data).flatMap(categoria => categoria);

  return (
    <CardSelectProvider className="grid grid-cols-3">
      <div className="bg-cover  bg-[url('../public/img/fondo.png')] h-screen overflow-y-auto z-0">
      <PrincipalCard className="3 ml-[10%] mr-[10%] z-0"/>
      <CardDetail eventos={eventos} />
        <div className='grid grid-cols-3 ml-[10%] mr-[10%] z-0'>
          
          {categorias.map((categoria, index) => (
            <CardDia key={index} categoria={categoria} />
            ))}
        </div>
      </div>
    </CardSelectProvider>
  );
}

export default App;
