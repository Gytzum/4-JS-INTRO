// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

const a= 8;
const b = 5;

//ternary variantas
console.log(a > b ? 'taip' : 'ne');




//if else analogas

if (a > b) {console.log('taip');
} else {console.log('ne');}



const age = 55;
const ageLimit = 18;

const status = age >= ageLimit ? 'galiu' : 'dar per jaunas...';
console.log(status);


const kelias = 330;
const bake = 200;

const arPasieksiuPalanga = kelias > bake ? 'sorry...' : 'yupikae!!';
console.log(arPasieksiuPalanga);

// ternary operatoriau klausimas egzamine -

const koksSkaicius = 2 > 3 
    ?4 < 5 
        ? 6 : 7 : 8;
console.log(koksSkaicius);