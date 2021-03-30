/*
IF - salygos sakinys, kuris atsako i klausima: true arba false.

galimi sablonai
if () {}
if () {} else {}
if () {} else if () {} ... else if () {} else {}


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

