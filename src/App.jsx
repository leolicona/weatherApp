import React from 'react'
import CardDays from './components/CardDays/CardDays'
import watchImage from './assets/img/shower.png'
import CardHightlights from './components/CardHightlights/CardHightlights'
import './App.css'


function App() {
  console.log('weatherImage', watchImage)
  return (
    <>
     {/* Barra lateral izquierda */}
     {/* <LeftSideBar/> */}
     
    {/*  buscar lugar */}
{/*     <SearchForPlace/> */}

    {/* díasde la semana */}
    <CardDays
    day= {'Lunes'}
    weather={watchImage}
    max={20}
    min={10}
    /> 
     <CardDays
    day= {'Martes'}
    weather={watchImage}
    max={20}
    min={10}
    /> 
     <CardDays
    day= {'Miercoles'}
    weather={watchImage}
    max={20}
    min={10}
    /> 
     <CardDays
    day= {'Jeves'}
    weather={watchImage}
    max={20}
    min={10}
    /> 
     <CardDays
    day= {'Viernes'}
    weather={watchImage}
    max={20}
    min={10}
    /> 
     <CardDays
    day= {'Sabado'}
    weather={watchImage}
    max={20}
    min={10}
    /> 
     <CardDays
    day= {'Domingo '}
    weather={watchImage}
    max={20}
    min={10}
    /> 

    {/* lo más destacado de hoy */}
    <CardHightlights

    />

    </>
  )
}

export default App
