import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Gyumolcs } from './components/gyumolcs'
import { UjGyumolcs } from './components/UjGyumolcs'
import { Gyumolcsok } from './components/Gyumolcsok'
import { listazgyumi } from './data'


function App() {
  const [gyumolcsok, setGyumolcsok] = useState((listazgyumi()))

  return (
    <>
      <header>
        <h1>piac</h1>
      </header>
      <main>
        <Gyumolcsok gyumolcsok={gyumolcsok} setGyumolcsok={setGyumolcsok}/>
        <UjGyumolcs gyumolcsok={gyumolcsok} setGyumolcsok={setGyumolcsok}/>
      </main>
    </>
  )
}

export default App
