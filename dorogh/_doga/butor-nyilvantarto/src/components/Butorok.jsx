import { torol } from "../data";
import { Butor } from "./Butor";

export function Butorok({butorok, setButorok}){

    function handleDelete(fajta){
        const update = torol(fajta)
        setButorok([...update])
    }

    return(
        <section>
            <h2>Butorok</h2>
            <div>
                {butorok.map(butor => (
                    <Butor
                        key={butor.fajta}
                        fajta={butor.fajta}
                        szin={butor.szin}
                        ar={butor.ar}
                        onDelete={() => handleDelete(butor.fajta)}
                    />
                ))}
            </div>
        </section>
    )


}