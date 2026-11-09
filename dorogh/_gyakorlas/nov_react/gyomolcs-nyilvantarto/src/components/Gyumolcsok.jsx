import { torol } from "../data";
import { Gyumolcs } from "./gyumolcs";

export function Gyumolcsok({gyumolcsok, setGyumolcsok}){

    function handelDelete(nev){
        const update = torol(nev)
        setGyumolcsok([...update])
    }

    return(
        <section>
            <h1>Piac</h1>
            <div>
                {gyumolcsok.map(gyumolcs => (
                    <Gyumolcs
                        key={gyumolcs.nev}
                        nev={gyumolcs.nev}
                        rosttartalom={gyumolcs.rosttartalom}
                        cukortartalom={gyumolcs.cukortartalom}
                        onDelete={() => handelDelete(gyumolcs.nev)}
                    />
                ))}
            </div>
        </section>
    )
}