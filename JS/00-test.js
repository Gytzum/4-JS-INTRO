// Kodas kuris isgauna dabartine diena bei laika.

let today = new Date();
let hour = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();
console.log(hour, minute, seconds);

let diena = today.getDay();
let savaite = ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Treciadienis', 'Ketvirtadienis', 
    'Penktadienis', 'Sestadienis' ];
console.log(savaite[diena] );

console.log("Siandien yra: " + savaite[diena] + ' ' + hour + ':' + minute + ':' + seconds);

//-------------------------------------------------

//
// const randomNr = Math.floor(Math.random () * 99) + 1 ;
// console.log(randomNr);

// function tikrinimas () {
//     let manoNr = spejimas.value;
//     if (manoNr === randomNr) {pranesimas.textContent = "Atspejai !!"
//     } else if (manoNr > randomNr) {pranesimas.textContent = " Tavo spejimas " + manoNr +". Per didelis"
//     } else if (manoNr < randomNr) {pranesimas.textContent = " Tavo spejimas " + manoNr +". Per mazas"
//     }
// }
// tikrinti.addEventListener (tikrinimas);

// //HTML
{/* <h1>Irasykite skaiciu nuo 1 iki 100 </h1>
<form>
    <label for="spejimas" id="spejimasl"> </label>
    <input type = "number" id= "spejimas">
    <input type="submit" id = "tikrinti" value = "Tikrinti">
</form>
<h2 id = "pranesimas"></h2> */}

// Nespeja ismesti rezultato nes paspaudus submit refreshina web.

 /*------------------------------------
intervalo suma uzduociu rezultatai:
1.
a: 0 
b: 10
c: 5050
d: 168069
e: 0
f:-2020

 *///-------------------------
console.log('------------');

// const nuo = -70;
// const iki = 30;
// let i = 0;
// for (x = nuo; x <= iki; x++) {
//     i = x + i;
//     console.log(x);
// }
// console.log('---------');
// console.log(i);

//arba gauss metodas sudeti i grupes po du tai 1-50 ir 51-101 tai 50 x 101 = 5050

//2222222222222222222222222222222222222222

// const a = 'abcdef';
// console.log(a.length);

// for (let i = a.length - 1 ; i >= 0; i--) {
//     const x = a[i]
//     console.log(x);
// }
console.log('------------');
//333333333333333333333333333333
const nuo = 0;
const iki = 11;
let b = 0;
for (let i = nuo; i < iki; i++){
    // console.log(i);
    let a = i % 3;
    
    
  if ( a == 0) { b + 1}

console.log(a);
}

console.log('Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 3 yra', b, 'vienetai');



// const num1 = 9;
// const div = 3;
// const rem = num1 % div ;
// console.log(rem);




















