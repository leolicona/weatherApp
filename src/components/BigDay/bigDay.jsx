


// Llamamos a los componentes que vamos a utilizar
import SearchForPlace from '../SearchPlace/searchPlace'
import Location from '../SearchLocation/Location'
import DayOfBigDay from '../DayOFBigDay/day'
import LayoutBigDay from '../LayoutBigDay/layout'
import ShowerBigDay from '../ShowerBigDay/shower'
import TodayOfBigDay from '../TodayBigDay/today'

// Llamamos a las imagenes que vamos a utilizar
import imgLocation from '../../assets/img/outline_my_location_white_36dp.png'
import imgWeather from '../../assets/img/shower.png'
import img_background from '../../assets/img/Cloud-background.png'



// Llamamos a los estilos que vamos a utilizar
import './bigDayStyle.css'




function BigDay() {
    return(
       <div className='container_bigDay'>
         <div className='buttons'>
            <SearchForPlace/>
            <Location img={imgLocation}/>
         </div>
         <DayOfBigDay img={imgWeather}/>
         <LayoutBigDay/>
         <ShowerBigDay/> 
         <TodayOfBigDay/>
         <div className='lugar'> Ciudad de México</div>

         <img className='image-background' src={img_background} alt="" />

        <span></span>
       </div>
    )
 }
export default BigDay