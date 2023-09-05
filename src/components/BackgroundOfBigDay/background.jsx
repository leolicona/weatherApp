import './backgroundStyle.css'
// eslint-disable-next-line react/prop-types
function BackgroundOfBigDay({background}) {
    return(
        <div>
            <img className='img_background' src={background} alt="" />
        </div>
    )
}
export default BackgroundOfBigDay