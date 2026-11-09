import { torol } from "../data";
import { Telefon } from "./Telefon";

export function Telefonok({telefonok, setTelefonok}){

    function handleDelete(id){
        const update = torol(id)
        setTelefonok([...update])
    }

    return(
        <section>
            <h2>Telefonok</h2>
            <div>
                {telefonok.map(telefon => (
                    <Telefon
                        key={telefon.id}
                        tipus={telefon.tipus}
                        gyartasi_ev={telefon.gyartasi_ev}
                        kapacitas={telefon.kapacitas}
                        onDelete={() => handleDelete(telefon.id)}
                    />
                ))}
            </div>
        </section>
    )
}