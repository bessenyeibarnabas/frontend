import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { listaz } from './data'
import { Telefonok } from './components/Telefonok'
import { Telefon } from './components/Telefon'
import { UjTelefonok } from './components/UjTelefon'

function App() {
  const [telefonok, setTelefonok] = useState(listaz())

  return (
    <>
      <header>
        <h1>Telefon nyilvántartó</h1>
      </header>
      <main>
        <UjTelefonok telefonok={telefonok} setTelefonok={setTelefonok}/>
        <Telefonok telefonok={telefonok} setTelefonok={setTelefonok}/>
      </main>
    </>
  )
}

export default App
