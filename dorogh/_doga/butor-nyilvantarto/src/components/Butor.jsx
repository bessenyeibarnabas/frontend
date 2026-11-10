export function Butor({fajta, szin, ar, onDelete}){
    return(
        <div  id="helyez">
            <p id="y1">Fajta: <b>{fajta}</b></p>
            <p id="y2">Szín: <b>{szin}</b></p>
            <p id="y3">Ár: <b>{ar}</b></p>
            <button type="button" id="e" onClick={onDelete}>Törlés</button>
        </div>
    )
}

