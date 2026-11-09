export function Telefon({tipus, gyartasi_ev, kapacitas, onDelete}){
    return(
        <div>
            <p>Típus <b>{tipus}</b></p>
            <p>kapacitas <b>{kapacitas}</b></p>
            <p>gyartasi_ev <b>{gyartasi_ev}</b></p>
            <button type="button" onClick={onDelete}>Törlés</button>
        </div>
    )
}