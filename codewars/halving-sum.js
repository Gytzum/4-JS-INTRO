function halvingSum(n) {
    let result = 0;

    while (n!== 0 ) {
        result += n;
        n = Math.floor(n/2);
    }
return result;
}
console.log(halvingSum(25),47);
console.log(halvingSum(127),247);