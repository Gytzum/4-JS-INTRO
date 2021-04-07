function sumEvenNumbers(input) {
    let result = 0;;

      for (let i = 0; i < input.length; i++) {
if (input[i] % 2 !== 0 ) {input[i] = 0}
else{result+=input[i]}
}
return result 
    }


    console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        30,);


        //Possible with:
        // sumEvenNumbers = input => input.filter(x => x % 2 == 0).reduce((x, y) => x + y, 0)