import './locationStyle.css'

function Location({img}) {
    return(
        <button className="button_location">
            <img className='img' src={img} alt=" " />
        </button>
    )
    
}
export default Location
