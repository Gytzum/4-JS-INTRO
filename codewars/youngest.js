function differenceInAges(ages){
   for ( let i = 0; i< ages.length; i++) {
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages) ]
   }
  } 
  


console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);

// let a =  [Math.min(ages)];
//    let b = Math.max(ages);
//     let c = b - a;
//     return c