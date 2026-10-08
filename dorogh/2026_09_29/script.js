const typeColors = new Map([
    ['normal', '#A8A77A'],
    ['fire', '#EE8130'],
    ['water', '#6390F0'],
    ['electric', '#F7D02C'],
    ['grass', '#7AC74C'],
    ['ice', '#96D9D6'],
    ['fighting', '#C22E28'],
    ['poison', '#A33EA1'],
    ['ground', '#E2BF65'],
    ['flying', '#A98FF3'],
    ['psychic', '#F95587'],
    ['bug', '#A6B91A'],
    ['rock', '#B6A136'],
    ['ghost', '#735797'],
    ['dragon', '#6F35FC'],
    ['dark', '#705746'],
    ['steel', '#B7B7CE'],
    ['fairy', '#D685AD'],
]);


const $ = id => document.getElementById(id);

const url = "https://pokeapi.co/api/v2/pokemon/";

let getPokeData = async() =>{
    let id = Math.floor(Math.random()*1025) +1;
    const endPoint = url + id;

    const response = await fetch(endPoint);
    const data = await response.json();

    updateCard(data);
}

let updateCard = (data) =>{
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other['official-artwork'].front_default;
    let pokeName = data.name;
    pokeName = pokeName[0].toUpperCase() + pokeName.substring(1);
    const types = data.types;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const speed = data.stats[5].base_stat;

    $("hp").innerText = 'HP:' + hp;
    $("img").src = imgSrc;
    $("poke-name").innerText = pokeName;
    $("attack").innerHTML = attack;
    $("defense").innerHTML = defense;
    $("speed").innerHTML = speed;

    appendTypes(types);
    styleCard(types[0].type.name);
}

let appendTypes = (types) => {
    $('type').innerHTML = "";
    
    for(let i=0; i<types.length; i++){
        let span = document.createElement("span");
        span.textContent = types[i].type.name;
        $('type').appendChild(span);
    }
}

let styleCard = (type) =>{
    const color = typeColors.get(type);
    $('card').style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #fff 37%)`;

    $("type").querySelectorAll('span').forEach( span =>{
        span.style.backgroundColor = color;
    } );
}

$("btn").addEventListener('click', getPokeData);