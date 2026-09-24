let szamok = [36, -2, 112, 101, 22];
// 1.) Adjunk hozzá 10 új, véletlen számokat a tömbhöz, [-100, +100]
for(let i = 0; i < 10; i++ ){
    szamok.push(Math.floor(Math.random() * 201) + 100);
}

console.log(szamok)

// 2.) Szűrjük ki egy új tömbbe a pozitív páros számokat

let tomb = []
for(let i = 0)
console.log(tomb)

// 3.) Döntsük el, hogy az új tömbbe van-e 100-nál nagyobb szám (true/false)
let vanBenne = false
for(let number in tomb){
    if(number > 100){
        vanBenne = true
    }
}
console.log(vanBenne)

// 4.) Határozzuk meg az új tömb legnagyobb értékű elemét
