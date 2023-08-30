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
    day= {'Wunes'}
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
