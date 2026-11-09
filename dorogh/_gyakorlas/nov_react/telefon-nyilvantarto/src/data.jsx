let TELEFONOK = [
    {
        id: 1,
        tipus: "android",
        gyartasi_ev: 2010,
        kapacitas: "5000mah"
    },
    {
        id: 2,
        tipus: "android",
        gyartasi_ev: 2024,
        kapacitas: "5000mah"
    },
    {
        id: 3,
        tipus: "ios",
        gyartasi_ev: 2019,
        kapacitas: "2000mah"
    },
]

export function listaz(){
    return TELEFONOK
}

export function felvesz(ujTelefon){
    if(TELEFONOK.find(a => a.id == ujTelefon.id))
        return
    TELEFONOK = [...TELEFONOK, ujTelefon]
}

export function torol(id){
    TELEFONOK = TELEFONOK.filter(a => a.id != id)
    return TELEFONOK
}