import React from 'react'
import './CardDays.css'
import sol from '../../assets/img/Shower.png'
function CardDays () {
    return(
        <section className='cardDay_container'>
            <span className='day'>tomorrow</span>
            <img className='weather_image' src={sol} alt="" />
            <span className='temp max'> 20</span>
            <span className='temp min'> 10</span>

        </section>
    )
}
export default CardDays