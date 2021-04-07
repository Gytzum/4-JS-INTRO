function positiveSum(arr) {

    let suma = 0;
    const kiekis = arr.length;
  
    for (let i = 0; i < kiekis; i++){
        const skaicius = arr[i];  
        if (skaicius > 0) {suma += skaicius;}   
        else {suma += 0;}
    }
    return suma;
}   
 
/*alternatyvos

function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }



  */
