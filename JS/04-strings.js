/*
Galimi variantai, kaip inicijuoti teksta:
- viengubos kabutes ;
- dvigubos kabutes;
-backtick;
*/
/* 
REKOMENDACIJOS:
- viengubas - ir dvigubas naudoti, tik jei inicuojate tekstini kintamaji, vienoje linijoje.
-backtikai - visi kiti atvejai t.y darbas su tekstais ir multi-line.
const vardas = 'Petras';
*/
const pavarde = "Petraitis";

// Cia yra vienguba kabute. (')
const kabute1 = "Cia yra vienguba (') kabute.";
console.log(kabute1);

// Cia yra dviguba kabute. (")
const kabute2 = 'Cia yra dviguba (") kabute.';
console.log(kabute2);

// Cia yra vienguba (') ir dviguba (") kabutes.
// Cia yra dviguba (") ir vienguba (') kabutes.
const kabute12 =  'Cia yra vienguba (\') ir dviguba (") kabutes.';
console.log(kabute12);
// \(backslash) leidzia suprasti, kad ignoruoti kabute ir kita dali suprasti kaip teksta.

const fullName = vardas + ' ' + pavarde;
console.log(fullName);


//
const marke = 'Tesla';
const model = 'S';
const battery = 100;
const batteryUnits = 'kW';

// I wish i had Tesla model S with a 100kW battery.

const car = 'I wish i had ' + marke + ' model ' + model + ' with a ' + battery + batteryUnits + ' battery' ;
console.log(car);

const backtick = `I wish i had ${marke} model ${model} with a ${battery}${batteryUnits} battery`;
console.log(backtick);

const backKabute21 = `Cia yra dviguba (\") ir vienguba (\') ir backtick (\`) `;
console.log(backKabute21);
//

// Jei reikia escape kabutes, pries jas padeda backslash, bet tekstas padrikas.
//Specialieji zymejimai \n\ pradeda is naujos eilutes
const head = '<head>\n\
    <meta charset="UTF-8">\n\
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\
    <title>JS Intro</title>\n\
    <link rel="stylesheet" href="./css/reset.css">\n\
</head>';
console.log(head);


//backtick sutvarko taip pat
const headBack = `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Intro</title>
    <link rel="stylesheet" href="./css/reset.css">
</head>`;
console.log(headBack);
