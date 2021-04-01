function daugyba(a, b){
    //Input validation
    if (a === Infinity || a === -Infinity){
        return 'ERROR: pirmasis skaicius negali buti begalybe.';
    } 
    if (isNaN(a)){
        return 'ERROR: pirmasis skaicius negali buti Nan.';
    } 
    if (b === Infinity || b=== -Infinity){
        return 'ERROR: antrasis skaicius negali buti begalybe.';
        } 
    if ('' + b === 'NaN'){ //arba b.toString() ==='NaN'
        return 'ERROR: pirmasis skaicius negali buti NaN.';
        } 
    //logic
    const rezultatas = a * b;

    //return result
    return rezultatas;
}

console.log(daugyba(Infinity, 0), '-> ERROR')
console.log(daugyba(1, Infinity), '-> ERROR')
console.log(daugyba(-Infinity, 0), '-> ERROR')
console.log(daugyba(1, -Infinity), '-> ERROR')

console.log(daugyba(5, 4), '-> 20');
console.log(daugyba(5, -4), '-> -20')
console.log(daugyba(2.5, 4), '-> 0')
console.log(daugyba(2.5, 0), '-> 0')
console.log(daugyba(-2.5, 0), '-> -0')
console.log(daugyba(0, 0), '-> 0')
console.log(daugyba(1.5, 2.6), '-> 3.9')
console.log(daugyba(NaN, 2));
console.log(daugyba(5, NaN));

// arba

function daugyba2(a1, b1){

    if (typeof a1 !== 'number') { 
        return `ERROR: pirmasis skaicius turi buti skaiciaus tipo`;
    }

    if (isFinite(a1) === false) {
       return `ERROR: pirmasis skaicius negali buti ${a1}.`;
    }   

    if (typeof a2 !== 'number') { 
         return `ERROR: pirmasis skaicius turi buti skaiciaus tipo`; }

    if (!isFinite(b1)) { 
        return `ERROR: pirmasis skaicius negali buti ${b1}.`;
    }

    const rezultatas1 = a1 * b1;
    return rezultatas1;
}

console.log(daugyba2(NaN, 2));
console.log(daugyba2(5, NaN));
console.log(daugyba2(-Infinity, 0), '-> ERROR')
console.log(daugyba2(1, Infinity), '-> ERROR')
console.log(daugyba2(2, 'labas'));
console.log(daugyba2(2, ''));
console.log(daugyba2('', 2));
console.log(daugyba2(7, false));
console.log(daugyba2(false, 5));
console.log(daugyba2(-7, [23, 5]));
console.log(daugyba2([5,18], -0.58));
console.log(daugyba2('rytas', 'labas'));
console.log(daugyba2(5, NaN));

