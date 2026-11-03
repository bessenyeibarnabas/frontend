import { Auto } from "./components/Auto";

let AUTOK = [
    {
        rendszam: "HET-123",
        evjarat: 2020,
        fogyasztas: 3.2,
    },
    {
        rendszam: "ABS-234",
        evjarat: 2018,
        fogyasztas: 8.1,
    },
    {
        rendszam: "CGT-456",
        evjarat: 2000,
        fogyasztas: 5.5,
    },
]

export function listaz(){
    return AUTOK;
}

export function felvesz(ujAuto){
    // AUTOK.push(ujAuto);
    if(AUTOK.find(a => a.rendszam == ujAuto.rendszam))
        return;

    AUTOK = [...AUTOK, ujAuto]
}

export function torol(rendszam){
    AUTOK = AUTOK.filter(a => a.rendszam != rendszam);
    return AUTOK;
}