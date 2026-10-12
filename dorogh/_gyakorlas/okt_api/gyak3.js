const $ = id => document.getElementById(id);

$("lekeres_d").addEventListener("click", lekeres)

async function lekeres() {
    let keres = $("kereso").value;

    const url = 'https://dummyjson.com/products/search?q=' + keres

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    toltes(data)
}

function toltes(adat){
    $("tartalom").innerHTML = ""

    for(const elem of adat.products){
        
        let tr = document.createElement("tr");

        let tdNev = document.createElement("td");
        let tdAr = document.createElement("td");
        let tdKat = document.createElement("td");

        tdNev.innerText = elem.title
        tdAr.innerText = elem.price
        tdKat.innerText = elem.category

        tr.appendChild(tdNev)
        tr.appendChild(tdAr)
        tr.appendChild(tdKat)

        $("tartalom").appendChild(tr)
    }
    
}