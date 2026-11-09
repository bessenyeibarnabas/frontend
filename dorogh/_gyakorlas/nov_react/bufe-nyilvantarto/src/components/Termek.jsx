export function Termek({termeknev, ar, kaloria, onDelete}){
    return(
        <div>
            <p>termnev <b>{termeknev}</b></p>
            <p>ár <b>{ar}</b></p>
            <p>kalória <b>{kaloria}</b></p>
            <button onClick={onDelete}>Törlés</button>
        </div>
    )
}