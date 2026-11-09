export function Gyumolcs({nev, cukortartalom, rosttartalom, onDelete}){
    return (
        <div>
            <p>neve: {nev}</p>
            <p>cukor t: {cukortartalom}</p>
            <p>rost t: {rosttartalom}</p>
            <button onClick={onDelete}>Törlés</button>
        </div>
    )
}