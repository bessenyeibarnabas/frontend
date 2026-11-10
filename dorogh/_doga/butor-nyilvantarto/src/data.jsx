let BUTOROK = [
    {
        fajta: "asztal",
        szin: "barna",
        ar: 1000,
    },
    {
        fajta: "szék",
        szin: "piros",
        ar: 500,
    },
    {
        fajta: "fiók",
        szin: "zöld",
        ar: 1500,
    },
]

export function lekerdez(){
    return BUTOROK
}

export function beszur(ujButor){
    if(BUTOROK.find(a => a.fajta == ujButor.fajta))
        return
    BUTOROK = [...BUTOROK, ujButor]
}

export function torol(fajta){
    BUTOROK = BUTOROK.filter(a => a.fajta != fajta)
    return BUTOROK
}

