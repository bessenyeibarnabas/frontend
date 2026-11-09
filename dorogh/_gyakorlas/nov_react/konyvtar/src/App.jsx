import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { lekerdez } from './data'
import { Konyvek } from './components/Konyvek'
import { UjKonyv } from './components/UjKonyv'

function App() {
  const [konyvek, setKonyvek] = useState(lekerdez())

  return (
    <>
      <header>
        <h1>Könyvtári nyílvántartó</h1>
      </header>
      <main>
        <Konyvek konyvek={konyvek} setKonyvek={setKonyvek}/>
        <UjKonyv konyvek={konyvek} setKonyvek={setKonyvek}/>
      </main>
    </>
  )
}

export default App
