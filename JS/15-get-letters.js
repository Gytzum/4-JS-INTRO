function letters(text, step) {

    if (typeof text !== 'string'){return 'ERROR: pirmasis kintamasis yra netinkamo tipo'};
    if ( typeof step !== 'number'){return 'ERROR: antrasis kintamasis yra netinkamo tipo '};
    if (!isFinite(step)) {return 'ERROR: antrasis kintamasis yra ne normalus skaicius'};
    if (text.length < step) { return 'ERROR: zingsnis negali buti didesnis uz teksto ilgi'};
    if (step === 0 ) {return 'ERROR: zingsnis negali buti nulis '};
    if (step % 1 !== 0 ) {return 'ERROR: zingsnis negali buti desimtainis skaicius '};

    let result = '';
    if (step > 0) {
    for (let i = step - 1; i < text.length;i+=step){
            result += text[i];
    }
  }
    else { 
      for (let i =text.length + step; i >= 0; i+=step){
        result += text[i];
      }
    }
      if (result === '' ) {console.error('ERROR: sveikinu, tu sugebejai sugalvoti testa, kuris teoriskai, algoritmo rasymo metu yra neimanomas')}
        return result;

}

console.log( letters( 'abc', -2, '-->', 'b' ));
console.log( letters( 'abcdefg', -2, '-->', 'fdb' ) );
console.log( letters( 'abcdefghijkl', -3, '-->', 'jgda' ) );
console.log( letters( 'abcdefghijkl', 3, '-->', 'cfil' ) );
console.log( letters( 'abc', 4 ) );


console.log( letters( 'abc', 1.5 ));
console.log( letters( 'abc', 0 ));
console.log( letters( 'abcdefghij', 3, '-->', 'cfi' ) );
console.log( letters( 'abcdefg', 2, '-->', Infinity ) );
console.log( letters( 'abcdefg', 2, '-->', -Infinity ) );
console.log( letters( 'abcdefg', 2, '-->', NaN ) );


/*
  _  _  _  _
abcdefghijkl   3-- > cfil

 _ _ _ _ _ _ 
abcdefghijkl   2-- > bdfhjl

____________
abcdefghijkl   1--> abcdefghijkl

abcdefghijkl   0 --> net neigzistuoja nuline reiksme...
*/



