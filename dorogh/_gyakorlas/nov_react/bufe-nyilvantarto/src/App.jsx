import { useState } from 'react';
import './App.css';
import { lekerdez } from './data';
import { UjTermek } from './components/UjTermek';
import { Termekek } from './components/Termekek';

function App() {
    // Állapot (state) létrehozása a data.js-ből vett adatokkal
    const [termekek, setTermekek] = useState(lekerdez());

    return (
        <>
            <header>
                <h1>Büfé Nyilvántartó</h1>
            </header>
            
            <main className="elrendezes">
                {/* A bal oldali űrlap megkapja a listát és a frissítő függvényt */}
                <UjTermek termekek={termekek} setTermekek={setTermekek} />
                
                {/* A jobb oldali lista szintén megkapja a listát és a frissítő függvényt */}
                <Termekek termekek={termekek} setTermekek={setTermekek} />
            </main>
        </>
    );
}

export default App;