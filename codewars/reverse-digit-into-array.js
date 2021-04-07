function digitize(n) {
let a = String(n).split('').reverse().map(Number);
console.log(a);
}

// String(n) : The String global object acts as a constructor for strings and "converts" the given number into string(in this case)
// The Array.reverse(): method reverses an array in place.
// The Array.map(): method creates and returns a new array calling a provided function on every array element
console.log(digitize(35231),[1,3,2,5,3]);