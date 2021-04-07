function maps(x){
    let a = 0;
   a =  x.map(n => n*2)
    return a
    }

    console.log(maps([1, 2, 3]), [2, 4, 6]);
    console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
    console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 