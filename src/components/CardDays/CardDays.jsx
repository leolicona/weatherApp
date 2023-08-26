import React from 'react';
import './cardDaysStyles.css';
function CardDays ({ day, weather, max, min }) {
    console.log('weather', weather)
    return (
        <section className="cardDays_container">
            <span className='day'>{day}</span>
            <img className='weather_image' 
                src={weather} alt='weather icon'/>
            <span className='temp max'>{max}</span>
            <span className='temp min'>{min}</span>
        </section>
    )
}

export default CardDays;