const zeroF = (distanceToPump, mpg, fuelLeft) => { b * c < a};
  
 

function zeroFuel(a, b, c) {
    let road = b * c;
    if (a<=road) {return true}
    else {return false}
}

  console.log(zeroFuel(50, 25, 2), true);
  console.log(zeroFuel(100, 50, 1), false);


  //Paprasciau 
  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump;
//
    // const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    //     return distanceToPump/mpg <= fuelLeft
    //   };

