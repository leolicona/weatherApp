

import watchImage from './assets/img/shower.png'
import img from './assets/img/outline_my_location_white_36dp.png'
import CardDays from './components/CardDays/CardDays'
import CardHightlights from './components/CardHightlights/CardHightlights'
import DegreesCelsius from './components/CardDegreesCelsius/degreesCelsius'
import Location from './components/SearchLocation/location'
import SearchForPlace from './components/SearchPlace/searchPlace'
import './App.css'



function App() {
  
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

    <DegreesCelsius
    degrees={'C°'} 
    isActive={true}
    />
    <DegreesCelsius
    degrees={'F°'} 
    isActive={false}
    />

    <Location
    img={img}
    />

    <SearchForPlace/>
   
    </>
  )
}

export default App
