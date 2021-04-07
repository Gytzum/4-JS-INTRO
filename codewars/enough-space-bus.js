function enough(cap, on, wait) {
    let x = 0;
    let spaceLeft = 0;
    x = cap - on;
    spaceLeft = wait - x;
    if ( x <= wait) {return spaceLeft}
    else {return 0}
  }


// geresni budai
 
//function enough(cap, on, wait) {
//     return Math.max(wait + on - cap, 0);
// }





  console.log(enough(10, 5, 5), 0);
  console.log(enough(100, 60, 50), 10);
  console.log(enough(20, 5, 5), 0);