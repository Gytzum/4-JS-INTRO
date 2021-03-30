/*
Skaiciu aibeje yra:
Normalus skaiciai
NaN - skaiciaus tipas bet ne normalus skaicius.
Infinity, -Infinity  skaiciaus tipo, taciau ne skaiciaus, tai tik apibrezimas;

*/

const marks = [10, 2, 8, 4, 6 ];
console.log(marks);

const firstMark = marks[0];
console.log('Pirmasis pazymys:', firstMark);

const secondMark = marks[1];
console.log('Antrasis pazymys:', secondMark);

//array index paskutinio nario sarase.
const lastMarkIndex = marks.length - 1;
const lastMark = marks[lastMarkIndex];
console.log('Paskutinis pazymys:', lastMark);

console.log('-------------');

/*
Apskaiciuoti pazymiu vidurki
*/
const totalSum = marks [0] + marks[1] + marks[2] + marks [3] + marks[4];
const count = marks.length;
const average = totalSum / count ;

const ats = `Bendra suma yra ${totalSum}, kiekis yra ${count} ir vidurkis yra ${average}.`;
console.log(ats);

/*
Apskaiciuoti vidurki kitu budu
*/

let totalSum2 = 0;                      //0 
totalSum2 = totalSum2 + marks[0];       //10            
totalSum2 = totalSum2 + marks[1];       //12
totalSum2 = totalSum2 + marks[2];       //20
totalSum2 = totalSum2 + marks[3];       //24
totalSum2 = totalSum2 + marks[4];       //30

const count2 = marks.length;
const average2 = totalSum2 / count2 ; 
console.log(average2);
console.log('_____________________________');
//alternatyva su JS ASSIGMENT OPERATORS
const count3 = marks.length;
let totalSum3 = 0; 
const average3 = totalSum3 / marks.length ; 
totalSum3 += marks[0];
totalSum3 += marks[1];
totalSum3 += marks[2];
totalSum3 += marks[3];
totalSum3 += marks[4];
console.log(average3);

//Automatinis budas padaryti ta pati kad nereiktu rasyti pvz 4 
//totalSum3 += marks[4];
console.log('---------------------');

let index = 0;
let totalSum4 = 0;
totalSum4 += marks[index];
index += 1;
totalSum4 += marks[index];
index += 1;
totalSum4 += marks[index];
index += 1;
totalSum4 += marks[index];
index += 1;
totalSum4 += marks[index];
const average4 = totalSum4 / marks.length;
console.log(average4);








