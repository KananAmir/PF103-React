
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Categories from './Categories'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [showCard, setShowCard] = useState(false)

  return (
    <>

      <button onClick={() => { setShowCard(!showCard) }}>toggle card</button>
      {showCard && <Card />}

      <hr />


      <Categories/>

    </>
  )
}

export default App
