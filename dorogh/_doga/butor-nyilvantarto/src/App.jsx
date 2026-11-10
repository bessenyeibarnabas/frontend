import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { lekerdez } from './data'
import { Butorok } from './components/Butorok'
import { UjButor } from './components/UjButor'

function App() {
  const [butorok, setButorok] = useState(lekerdez())

  return (
    <>
      <header>
        <h1>Bútor nyílvántartó</h1>
      </header>
      <main>
        <Butorok butorok={butorok} setButorok={setButorok}/>
        <UjButor butorok={butorok} setButorok={setButorok}/>
      </main>
    </>
  )
}

export default App
