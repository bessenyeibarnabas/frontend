console.log(typeof(2));
console.log(typeof(2.14));
console.log(typeof(true));
console.log(typeof("ez ehy szöveg"));

// Gyengén típusos nyelv
console.log(3*"2");
console.log(3*"alma"); //not a number
console.log(typeof(3*"alma")); //típusa szám, de az értéke "NAn"

console.log(3+"2");
console.log(typeof(3+"2"));

let a = 3
let b = "2"
console.log(a+parseInt(b)); // str to int
console.log(a+b*1); // profi megoldás str*1

let n = null; // üres
let u = undefined; //most még üres, de később fel lesz töltve


// Függvények
// Camel-case
// 1. eset
function Udvozol(){
    console.log("Üdvözöllek!");
}

//2. eset
const udv = function (){
    console.log("Üdv")
}

//3. eset
const udv2 = () => {console.log("Üdv2!")}

Udvozol();
udv();
udv2();

function negyzetreEmel(szam){
    return szam*szam;
}

const negyzet = (n) => {return n*n} // ha csak egy bemenet van akkor el lehet hagyni a zárójelet "(n)"
// még lustább: ha 1db return és egy paraméter: const negyzet = n => n*n

console.log(negyzetreEmel(2));
console.log(negyzet(2));


// tömbök
let autok = ["Audi", "Bmw", "Ford", "Toyota", "Dacia"];
console.log(autok[3]);
console.log(autok.at(3));

for(let i=0; i< autok.length; i++){
    console.log(autok[i]);
}

function eldont2 (autoNev2){
    return autoNev2 == "Bmw"
}

console.log(autok.findIndex(auto => auto == "Bmw"));
console.log(autok.findIndex(auto => auto == "Honda")); // -1 nincs a tömben

// új elem befűzése
autok.push("Honda")
autok.push("Fiat", "Nissan")

//utolsó elem törlése, visszaadja azt
console.log(autok.pop());

// Spread operátor
let ujAutok = ["Mercedes", ...autok, "Suzuki",];
console.log(ujAutok)

// szűrés -  tömbből szűr, visszatérése egy tömb
console.log(ujAutok.filter(auto => auto == "Honda" || auto == "Ford"));


// töröljük ki az ujAutok-ból a Hondákat
ujAutok = ujAutok.filter(auto => auto!="Honda");
console.log(ujAutok)

//toString
console.log(autok.toString());
console.log(autok.join(" és "))

//rendezés mint pythonban betűrend szerint
console.log(autok.sort())
console.log(autok.sort().reverse())

// numerikus tömb rendezés
let szamok = [8, 3, 5, 5, 0, 8, 7, 6, 5]

console.log(szamok.sort((a,b) => a-b))

// Eldöntés - tartalmazza-e
console.log(ujAutok.includes("Ford"));
console.log(ujAutok.includes("Ford", 8)); //N-edik indextől keres
console.log(ujAutok.includes("Citroen"));

// összefűzés
const ab = [1, 2, 3];
const bb = [4, 5, 6];
const c1 = [...ab,...bb];
console.log(c1)

// Készítsünk fgv-t ami számokat ad össze
function osszead(...numbers){
    let osszeg = 0;
    for(let i = 0; i < numbers.length; i++) {
        osszeg += numbers[i];
    }
    return osszeg;
}

console.log(osszead(2, 7));
console.log(osszead(2, 7, 4));
console.log(osszead(2, 7, 5, 5, 8, 6, 4, 1, 23, 4, 5));

let szamok2 = [2, 7, 5, 5, 8, 6, 4, 1, 23, 4, 5]
let sum = 0
szamok2.forEach(x => sum+=x)
console.log(sum)