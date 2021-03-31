/*
switch () {
    case:
        break;
    default:    
        break;
}

n
*/

const day = 3;

switch (day) {
    case 1:
        console.log('pirmadienis');
        break;
    case 2:
        console.log('antradienis');
        break;
    case 3:
        console.log('treciadienis');
        break;

    default:
        console.log('Nezinau tokios dienos');
        break;
}

//--------------------------------------

const day2 = 5;

switch (day2) {
    case 1: 
    console.log('darbo diena');
    break;
    case 2: 
    console.log('darbo diena');
    break;
    case 3: 
    console.log('darbo diena');
    break;
    case 4: 
    console.log('darbo diena');
    break;
    case 5: 
    console.log('darbo diena');
    break;
    case 6: 
    console.log('savaitgalis');
    break;
    case 7: 
    console.log('savaitgalis');
    break;
    default:
        console.log('nera tokios dienos');
}

//arba

const day3 = 6;

switch (day3) {
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: 
         console.log('darbo diena');
         break;
    case 6: 
    case 7: 
         console.log('savaitgalis');
        break;
    default:
         console.log('nera tokios dienos');
}

//---------------------------------------------+

/*PROCESAS (arbatos gamyba):
1-paimti puodeli.
2-ideti arbatos.
3-isideti saldiklio/cukraus.
4-ipilti vanens.
5-ismaisyti.
6-gerti.
*/

const processStep = 2;
console.log('----------------');
switch (processStep) {
    case 1:
        console.log('paimti puodeli');
    case 2:
        console.log('ideti arbatos');
    case 3:
        console.log('isideti saldiklio/cukraus.');
    case 4:
        console.log('ipilti vanens.');
    case 5:
        console.log('ismaisyti.');
    case 6:
        console.log('gerti.');
        break;
    default:
        console.log('Toks gaminimo budas neimanomas');
}


const stop ='Vilnius' ;

switch (stop) {
    case 'Vilnius' : console.log('Vilnius');
    case 'Elektrenai' : console.log('Elektrenai');
    case 'Kaunas' : console.log('Kaunas');
    case 'Jonava' : console.log('Jonava');
    case 'Telsiai' : console.log('Telsiai');
    case 'Klaipeda' : console.log('Klaipeda');
        break;
    default :
        console.log(nera tokios miesto);   
}





































