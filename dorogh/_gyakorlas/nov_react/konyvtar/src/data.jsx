let KONYVEK =[
    { leltari_szam: 1, szerzo: "Gárdonyi Géza", cim: "Egri csillagok", kiadas_eve: 2000, keszleten: true },
    { leltari_szam: 2, szerzo: "Jókai Mór", cim: "Az arany ember", kiadas_eve: 1995, keszleten: false },
    { leltari_szam: 3, szerzo: "Molnár Ferenc", cim: "A Pál utcai fiúk", kiadas_eve: 2010, keszleten: true }
];

export function lekerdez(){
    return KONYVEK
}

export function hozzad(ujKonyv){
    if(KONYVEK.find(a => a.leltari_szam == ujKonyv.leltari_szam))
        return
    KONYVEK = [...KONYVEK, ujKonyv]
}

export function torol(leltari_szam){
    KONYVEK = KONYVEK.filter(a => a.leltari_szam != leltari_szam)
    return KONYVEK
}
