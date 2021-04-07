function numberLength (num) {

    if (typeof num !=='number') {return 'ERROR: turi buti skaiciaus tipas.'}
    if(!isFinite(num)) {return `ERROR: turi buti normalus skaicius, o ne ${num}`}

    let digitsCount = ('' + num).length;
    // const digitsCount = num.toString().length; galimas variantas

    if (num % 1 !== 0) {digitsCount--}   //kablelio suradimas
    if (num < 0 ) {digitsCount--}
    return digitsCount;

    
}






// console.log( numberLength(5), '-->', 1);
// console.log( numberLength(781), '-->', 3 );
// console.log( numberLength(37060123456), '-->', 11  );
// console.log( numberLength(3.14), '-->', 3);
// console.log( numberLength( -2000), '-->', 4);
// console.log( numberLength(0), '-->', 1);
// console.log( numberLength(0), '-->', -1);
// console.log( numberLength( true));
console.log( numberLength(0.0000000000000000000000000000000000000000000000000000000000000000001), '-->', 68);
console.log( numberLength(10000000000000000000000000000000000000000000000000000000000000000000), '-->', 68);
// console.log( numberLength( true ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”

// rezultatas: “Pateikta netinkamo tipo reikšmė.”

// rezultatas: “Pateikta netinkamo tipo reikšmė.
// console.log( numberLength( Infinity ) );
// console.log( numberLength( -Infinity ) );
// console.log( numberLength( NaN) );
// console.log( numberLength( 'asd' ) );
// console.log( numberLength( 'asd1561asd651as56d' ) );
// console.log( numberLength( '8542awfasfsafas2f5' ) );
// console.log( numberLength( ['asd'] ));
// console.log( numberLength( [123] ));
// console.log( numberLength( undefined));
// console.log( numberLength( true ));
// console.log( numberLength([true, false]));
// console.log( numberLength( numberLength));
// console.log( numberLength( numberLength()));


