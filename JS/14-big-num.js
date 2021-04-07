function bigNum(list){
    if (!Array.isArray(list)) {return 'ERROR: turi buti array tipo reiksme.'}
    if (list.length === 0) { return 'ERROR: array negali buti tuscias.'}

    let biggest = -Infinity; // arba list [0] tada let i = 1;
    for (let i = 0; i< list.length; i++) {
       
        const number = list[i];
 //jei nenormalus skaicius reikia praleisti ir eit toliau
        if (typeof number !=='number'|| !isFinite(number)) {continue}

        if (number > biggest) {biggest = number}

    }
    //POST LOGIC VALIDATION
        if(biggest ===-Infinity) {return 'ERROR; array neturi nei vienos normalios reiksmes'}
    return biggest;
}


console.log( bigNum('pomidoras'));
console.log( bigNum([]));
console.log( bigNum([ 1 ]), '-->', 1);
console.log( bigNum([ 1, 2, 3 ]), '-->', 3 );
console.log( bigNum([-5, 78, 14, 0, 18 ]), '-->', 78);
console.log( bigNum([ 69, 69, 69, 69, 66 ]), '-->', 69);
console.log( bigNum([ -1, -2, -3, -4, -5, -6, -7, -8 ]), '-->', -1);
console.log( bigNum([ -1, -2, -3, -4, -5, -6, -7, -8, false ]), '-->', -1);
console.log( bigNum([ -1, -2, -3, -4, -5, -6, -7, -8, true]), '-->', -1)
console.log( bigNum([ 1, 2, 3, NaN]), '-->', 3 );
console.log( bigNum([ 1, 2, 3, Infinity]), '-->', 3 );
console.log( bigNum([ 1, 2, 3, -Infinity]), '-->', 3 );
console.log( bigNum([ 1, 2,'ads', 5]), '-->', 5 );
console.log(bigNum([Infinity, true,false, '','asda', [], [123], {} ]));
//koks turetu buti algoritmas jog rastu didziausia skaicius bet kokio guylio array
//hint recursion
console.log(bigNum([-1, -22, [[[7,-14]],22]]));



