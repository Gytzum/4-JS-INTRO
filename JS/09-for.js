/*
for () {}
- i++, i = i + 1; i+=1
- i--, i = i - 1; i-=1
*/
//kaip pereiti per sarasa
const marks = [10, 2, 8, 4, 6, 5, 8, 7, 3];

for (let i=0; i < marks.length; i++) {
    console.log(marks[i]); //arba console.log(i, '-', marks[i]);
    const skaicius = marks[i];
    console.log(skaicius);
}


//pereiti per intervala imtinai
console.log('------------');
const nuo = 5;
const iki = 10;
//x < iki o jei imtinai x <= iki 
for (let x = nuo; x <= iki; x++){
    console.log(x);
}


//pereiti per intervala imtinai atbulai
console.log("--------------");
const nuo2 = 8;
const iki2 = 4;

for(let x = nuo2; x >= iki2; x--) {
    console.log(x);
}

console.log("---------------------");

//teksto ilgis ir i(x) - oji raide
const hi = 'labas';

console.log(hi[2]);

for (let i=0; i<hi.length; i++) {
    const raide =hi[i];
    console.log(raide);
}
console.log('--------');

// procento operatorius kai liekana yra 0
console.log('-----------');

const num1 = 13;
const div = 3;
const rem = num1 % div ;
console.log(rem);



