import { useState } from 'preact/hooks'
import './app.css'
import { Autok } from './components/autok';
import { listaz } from './data';
import { UjAuto } from './components/UjAuto';

export function App() {
  const [autok, setAutok] = useState(listaz());

  return (
    <>
      <header>
        <h1>Autó Nyilvántartó</h1>
      </header>
      <main>
        <Autok autok={autok} setAutok={setAutok} />
        <UjAuto autok={autok} setAutok={setAutok}/>
      </main>
    </>
  );
}

export default App;