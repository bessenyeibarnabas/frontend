const $ = id => document.getElementById(id);

async function kereses() {
    let keresett = $("keresett").value.trim();
    keresett = keresett.replaceAll(" ", "+");

    const url = `https://itunes.apple.com/search?term=${keresett}&media=music`;

    const response = await fetch(url);
    const data = await response.json();

    fillTable(data);
}

/**
 * @param {typeof import('./example.json')} data
 */
let fillTable = data => {

    $("zenek").innerHTML = ""

    const musics = data.results;

    let i = 0;
    for (let music of musics) {
        let tr = document.createElement("tr");
        let sorszam = document.createElement("td");
        sorszam.innerText = i;

        let eloado = document.createElement("td");
        eloado.innerText = music.artistName;

        let borito = document.createElement('td')
        let pic = document.createElement('img')
        pic.src = music.artworkUrl60

        let cim = document.createElement("td");
        cim.innerText = music.trackName;

        let hossz = document.createElement("td");
        hossz.innerText = ms2Time(music.trackTimeMillis);

        let ev = document.createElement("td");
        if (music.releaseDate)  //ha létezik
            ev.innerText = music.releaseDate.substring(0, 4);

        cim.onclick = () =>{
            $('zene').src = music.previewUrl;
            $('boritokep').src = music.artworkUrl100
        }

        cim.classList.add('zene-td');

        tr.appendChild(sorszam);
        tr.appendChild(eloado);
        borito.appendChild(pic)
        tr.appendChild(borito)
        tr.appendChild(cim);
        tr.appendChild(hossz);
        tr.appendChild(ev);
        $("zenek").appendChild(tr);

        i++
    }
}

let ms2Time = input => {
    input *= 1;

    let h = Math.floor(input / (1000 * 60 * 60));
    input = input - (h * 60 * 60 * 1000);

    let m = Math.floor(input / (1000 * 60));
    input = input - (m * 60 * 1000);

    let s = Math.floor(input / 1000);
    input = input - (s * 1000);

    let str = "";
    if (h > 0)
        str += h.toString().padStart(2, "0") + ":";
    str += m.toString().padStart(2, "0") + ":";
    str += s.toString().padStart(2, "0") + ",";
    str += input.toString().padStart(3, "0");

    return str;
}

$("kereses").addEventListener("click", kereses);
$("keresett").addEventListener("keypress", event => {
    if (event.key == "Enter") {
        kereses();
    }
})
