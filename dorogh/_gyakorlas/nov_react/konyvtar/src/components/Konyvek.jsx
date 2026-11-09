import { torol } from "../data";
import { Konyv } from "./Konyv";

export function Konyvek({konyvek, setKonyvek}){

    function handleDelete(leltari_szam){
        const update = torol(leltari_szam)
        setKonyvek([...update])
    }

    return(
        <section>
            <h1>Könyvtár</h1>
            <div>
                {konyvek.map(konyv => (
                    <Konyv
                        key={konyv.leltari_szam}
                        leltari_szam={konyv.leltari_szam}
                        szerzo={konyv.szerzo}
                        cim={konyv.cim}
                        kiadas_eve={konyv.kiadas_eve}
                        keszleten={konyv.keszleten}
                        onDelete={() => handleDelete(konyv.leltari_szam)}
                    />
                ))}
            </div>
        </section>
    )
}