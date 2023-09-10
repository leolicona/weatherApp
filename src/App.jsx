

import watchImage from './assets/img/shower.png'
import img from './assets/img/outline_my_location_white_36dp.png'
import img_day from './assets/img/shower.png'
import img_background from './assets/img/Cloud-background.png'
import CardDays from './components/CardDays/CardDays'
import CardHightlights from './components/CardHightlights/CardHightlights'
import DegreesCelsius from './components/CardDegreesCelsius/degreesCelsius'
import Location from './components/SearchLocation/Location'
import SearchForPlace from './components/SearchPlace/searchPlace'
import BigDay from './components/BigDay/bigDay'
import DayOfBigDay from './components/DayOFBigDay/day'
import BackgroundOfBigDay from './components/BackgroundOfBigDay/background'
import LayoutBigDay from './components/LayoutBigDay/layout'
import TodayOfBigDay from './components/TodayBigDay/today'
import ShowerBigDay from './components/ShowerBigDay/shower'
import './App.css'



function App() {
  
  return (
    <div className='main-container'>
      <BigDay/>
      <div className='rigth-container'>

      </div>
    </div>
  )
}

export default App
