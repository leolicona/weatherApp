import './locationStyle.css'

// eslint-disable-next-line react/prop-types
function Location({img}) {
    return(
        <button className="button_location">
            <img className='img' src={img} alt=" " />
        </button>
    )
    
}
export default Location
