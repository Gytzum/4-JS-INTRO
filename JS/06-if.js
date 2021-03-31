/*
IF - salygos sakinys, kuris atsako i klausima: true arba false.

galimi sablonai
if () {}
if () {} else {}
if () {} else if () {} ... else if () {} else {}

Grazinamos reiksmes True ir False

palyginimo operatoriai:
-galimi: <, >, ==, <=, >=, ==, ===, !=, !==
-naudotini: <, >, ==, <=, >=, ===,
-nenaudotini: ==, != nes netikrina ar suderinami

*/

const a = 4;
const b = 8;

if (a < b) { 
console.log('a yra maziau uz b');
}

if (a > b) { 
    console.log('a yra daugiau uz b');
    }
if (a==b) {
    console.log('a yra lygu b');
}

const c = 9;
const d = 9

if (c <= d) {
    console.log('c maziau uz d');
} else {
    console.log('c daugiau uz d');
} 
console.log('----------------');

const e = '77';
const f = 77;
//lygu ==, === grieztai lygus tipai taipat  
//lygus pvz. 88 ir '88'
if (e === f) {
    console.log('e lygu f');
} else {
    console.log('e ne lygu f');
}

console.log('---------------------');

const akys = 'melynos';

if (akys === 'melynos') {
    console.log('akys melynos');
} else if (akys === 'zalios'){
    console.log('akys zalios');
} else if(akys === 'rudos') {
    console.log('akys rudos');
} else {console.log('kitos spalvos');};

// Logikos nestinimas (logikos strukturos rasymas viduje neribotai)

// const city = 'Kaunas';

// if (city === 'Vilniud') {
//     console.log('Sveiki atvyke i Vilniud ;)');
//  } else {
//         if (city === 'Kaunas') {
//             console.log('Sveiki atvyke i Kauna!!');
//          } else if(city === 'Siauliai'); {
//             console.log('Sveiki atvyke i Siaulius');
//                  } else if (city === 'Beduone'); {
//                  console.log('Sveiki atvyke i Beduone');
//                  } else {console.log('Sveiki atvyke i kazkoki nezinoma miesta!');}
//         }
// }



// True ar false su kintamaisiais bei skaiciai
//Teigiami ir neigiami skaiciai duoda true
//Nulis ( 0 ) duoda false
//Tuscias tekstas - false
//Tekstas true
//Bet koks array [] grazina true
//Undefined yra False
//Nan yra False
//null yra False
//Infinity arba -Infinity yra True

/*
const arMokausi = true;
if (arMokausi) { console.log('taip ir toliau');
    }else {console.log('pailseti irgi reikia' );
}

const arMokausi1 = 5153;
if (arMokausi1) { console.log('taip ir toliau');
    }else {console.log('pailseti irgi reikia' );
}

const arMokausi2 = 'safasf';
if (arMokausi2) { console.log('taip ir toliau');
    }else {console.log('pailseti irgi reikia' );
}

const arMokausi3 = '';
if (arMokausi3) { console.log('taip ir toliau');
    }else {console.log('pailseti irgi reikia' );
}


const arMokausi0 = 0;
if (arMokausi0) { console.log('taip ir toliau');
    }else {console.log('pailseti irgi reikia' );
}

const arMokausi4 = undefined;
if (arMokausi4) { console.log('taip ir toliau');
    }else {console.log('pailseti irgi reikia' );
*/


























































