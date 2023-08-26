
import CardDays from './components/CardDays/CardDays'
import weatherImage from './assets/images/shower.png'
import './App.css'

function App() {

  console.log('weatherImage', weatherImage)
  return (
    <>
      <h1>WeatheApp</h1>
      <CardDays 
        day={'Lunes'}
        weather={weatherImage}
        max={20}
        min={10}
      />
    </>
  )
}

export default App
