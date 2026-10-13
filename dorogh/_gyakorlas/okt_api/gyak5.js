const $ = id => document.getElementById(id)

$("gombocska").addEventListener("click", kerest)

async function kerest() {
    let kereso = $("bemenet").value;

    const url = 'https://dummyjson.com/products/search?q=' + kereso

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    tolt(data)
}

function tolt(adat){
    $("tartalom").innerHTML = ""

    for(const elem of adat.products){
        let tr = document.createElement("tr")

        let tdAr = document.createElement("td")
        let tdNev = document.createElement("td")
        let tdKat = document.createElement("td")

        tdAr.innerText = elem.price
        tdNev.innerText = elem.title
        tdKat.innerText = elem.category

        tr.appendChild(tdAr)
        tr.appendChild(tdNev)
        tr.appendChild(tdKat)

        $("tartalom").appendChild(tr)
    }
}