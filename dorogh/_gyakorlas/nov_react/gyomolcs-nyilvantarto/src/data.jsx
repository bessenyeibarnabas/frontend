let GYUMOLCSOK = [
    {
        nev: "alma",
        cukortartalom: 10,
        rosttartalom: 20,
    },
    {
        nev: "körte",
        cukortartalom: 15,
        rosttartalom: 30,
    },
    {
        nev: "banán",
        cukortartalom: 40,
        rosttartalom: 50,
    },
]

export function listazgyumi(){
    return GYUMOLCSOK
}

export function felvesz(ujgyumi){
    if(GYUMOLCSOK.find(a => a.nev == ujgyumi.nev))
        return
    GYUMOLCSOK = [...GYUMOLCSOK, ujgyumi]
}

export function torol(gyumolcsnev){
    GYUMOLCSOK = GYUMOLCSOK.filter(a => a.nev != gyumolcsnev)
    return GYUMOLCSOK
}