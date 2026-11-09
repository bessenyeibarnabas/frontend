export function Konyv({leltari_szam, szerzo, cim, kiadas_eve, keszleten, onDelete}){
    return(
        <div>
            <p>Leltári szám: <b>{leltari_szam}</b></p>
            <p>Szerző: <b>{szerzo}</b></p>
            <p>Cím: <b>{cim}</b></p>
            <p>Kiadás éve: <b>{kiadas_eve}</b></p>
            <p>Készleten: <b>{keszleten ? "Igen" : "Nem"}</b></p>
            <button type="button" onClick={onDelete}>Törlés</button>
        </div>
    )
}