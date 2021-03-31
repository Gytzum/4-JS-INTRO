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

//------------------------------------