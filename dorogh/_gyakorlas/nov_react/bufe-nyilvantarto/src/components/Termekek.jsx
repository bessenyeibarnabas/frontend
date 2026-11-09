import { torol } from "../data";
import { Termek } from "./Termek";

export function Termekek({termekek, setTermekek}){

    function handleDelete(id){
        const update = torol(id)
        setTermekek([...update])
    }

    return(
        <section>
            <h1>Büfé</h1>
            <div>
                {termekek.map(termek => (
                    <Termek
                        key={termek.id}
                        termeknev={termek.termeknev}
                        ar={termek.ar}
                        kaloria={termek.kaloria}
                        onDelete={() => handleDelete(termek.id)}
                    />
                ))}
            </div>
        </section>
    )
}