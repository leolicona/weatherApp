import './degreesStyles.css'

function Degrees ({ degrees, isActive }) {

 

    return ( 
        <div className={`degrees_container ${ isActive ? 'active' : ''  }`}>
            <span className='degrees'>{degrees}</span>
        </div>
     );
}

export default  Degrees ;