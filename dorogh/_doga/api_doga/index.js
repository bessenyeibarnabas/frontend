const $ = id => document.getElementById(id)

$("gombocska").addEventListener("click", lekeres)
async function lekeres() {

    const url = 'https://randomuser.me/api/'

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    tolt(data)
}

function tolt(adat){
    $("tartalom").innerHTML = ""

    for(const elem of adat.results){

        let gyujt = document.createElement("div")

        let imga = document.createElement("img")
        let hNev = document.createElement("p")

        let pAdress = document.createElement("p")
        let eMail = document.createElement("p")
        let id = document.createElement("p")
        let bbr = document.createElement("br")

        //töltés
        imga.src = elem.picture.medium
        hNev.innerHTML = elem.name.first + " " + elem.name.last

        pAdress.innerHTML = "Address: " + elem.location.country +" "+ elem.location.city +" "+ elem.location.street.name +" "+ elem.location.street.number
        eMail.innerHTML = "E-mail: " + elem.email

        // id döntése
        if(elem.id.value == null){
            id.innerHTML = "ID: -"
        }   else{
                id.innerHTML = "ID: " + " " + elem.id.value
            }

        gyujt.appendChild(bbr)
        gyujt.appendChild(imga)
        gyujt.appendChild(hNev)
        gyujt.appendChild(pAdress)
        gyujt.appendChild(eMail)
        gyujt.appendChild(id)
        gyujt.appendChild(bbr)

        $("tartalom").appendChild(gyujt)

    }
}