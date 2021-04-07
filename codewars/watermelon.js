function divide(weight){
    let a = weight % 2;
    if (a === 0 && weight > 2 ) {return true}
    else {return false}
  }



  function divide(weight){
    return weight > 2 && !(weight % 2);
  }

console.log(divide(4), true);
console.log(divide(2), false);
console.log(divide(5), false);
// console.log(divide(88), true);
// console.log(divide(100), true);
// console.log(divide(67), false);
// console.log(divide(90), true);
// console.log(divide(10), true);
// console.log(divide(99), false);
// console.log(divide(32), true);