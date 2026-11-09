let TERMEKEK = [
    {
        id: 1,
        termeknev: "alma",
        ar: 500,
        kaloria: 100,
    },
    {
        id: 2,
        termeknev: "körte",
        ar: 400,
        kaloria: 150,
    },
    {
        id: 3,
        termeknev: "csoki",
        ar: 1500,
        kaloria: 1200,
    },
    {
        id: 4,
        termeknev: "répa",
        ar: 200,
        kaloria: 50,
    },
]

export function lekerdez(){
    return TERMEKEK
}

export function felvesz(ujTermek){
    if(TERMEKEK.find(a => a.id == ujTermek.id))
        return
    TERMEKEK = [...TERMEKEK, ujTermek]
}

export function torol(id){
    TERMEKEK = TERMEKEK.filter(a => a.id != id)
    return TERMEKEK
}