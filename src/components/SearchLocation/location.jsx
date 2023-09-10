import './locationStyle.css'
import location from '../../assets/img/outline_my_location_white_36dp.png'

// eslint-disable-next-line react/prop-types
function Location({img}) {
    return(
        <button className="button_location">
            <img className='img' src={img} alt=" " />
        </button>
    )
    
}
export default Location
