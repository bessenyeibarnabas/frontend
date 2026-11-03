export function Auto({rendszam, evjarat, fogyasztas, onDelete}){
    return(
        <div id="auto">
            <p>Rendszám: <b>{rendszam}</b></p>
            <p>Évjárat: <b>{evjarat}</b></p>
            <p>Fogyasztás: <b>{fogyasztas}</b></p>
            <button onClick={onDelete}>Törlés</button>
        </div>
    );
}