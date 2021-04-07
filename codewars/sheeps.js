
const array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];



function countSheeps(arrayOfSheep) {
    let sheep = 0;
for (let i = 0; i < arrayOfSheep.length; i++ ) {
    let a = arrayOfSheep[i]
    console.log(a);
    if(a===true) {sheep += 1}
    else{sheep+=0}
}
return sheep
}



  const gg = countSheeps(array1);
  console.log(gg);









