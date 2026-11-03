import { Auto } from "./Auto";
import { torol } from "../data";

export function Autok({autok, setAutok}){
    function handleDelete(rendszam){
        const frissitettAutok = torol(rendszam);
        setAutok([...frissitettAutok]);
    }

    return(
        <section id="autokc">
            <h2>Autók listája</h2>
            <div id="items">
                {autok.map(auto => (
                <Auto 
                    key={auto.rendszam} 
                    rendszam={auto.rendszam} 
                    evjarat={auto.evjarat} 
                    fogyasztas={auto.fogyasztas} 
                    onDelete={() => handleDelete(auto.rendszam)}
                />
            ))}
            </div>
            
        </section>
    );
}