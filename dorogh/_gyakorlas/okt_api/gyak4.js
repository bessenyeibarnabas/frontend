const $ = id => document.getElementById(id)

$("gombos").addEventListener("click", lekeres)

async function lekeres() {
    let ker = $("bevitel").value;

    const url = 'https://dummyjson.com/products/search?q=' + ker

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    tolt(data)
}

function tolt(adat){
    $("tartalom").innerHTML = ""

    for(const elem of adat.products){

        let tr = document.createElement("tr")

        let tdTerm = document.createElement("td")
        let tdAr = document.createElement("td")
        let tdKat = document.createElement("td")
        let imga = document.createElement("img")

        tdTerm.innerText = elem.title
        tdAr.innerText = elem.price
        tdKat.innerHTML = elem.category
        imga.src = elem.images[0]

        tr.appendChild(tdTerm)
        tr.appendChild(tdAr)
        tr.appendChild(tdKat)
        tr.appendChild(imga)

        $("tartalom").appendChild(tr)
    }
}
