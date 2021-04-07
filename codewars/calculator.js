function calculate(num1, operation, num2) {
    if(!isFinite(num1, num2)) {return null}
   if (operation === '+'){return num1 + num2}
   else if (operation === '-'){return num1 - num2}
   else if (operation === '*'){return num1 * num2}
   else if (operation === '/' && num2 === 0){return null}
   else if (operation === '/'){return num1 / num2}
   else{return null}
   }

// console.log(calculate(3.2,"+", 8), 11.2, "3.2 + 8 = 11.2")
// console.log(calculate(3.2,"-", 8), -4.8, "3.2 - 8 = -4.8")
// console.log(calculate(3.2,"/", 8), 0.4, "3.2 / 8 = .4")
// console.log(calculate(3.2,"*", 8), 25.6, "3.2 * 8 = 25.6")
// console.log(calculate(-3,"+", 0), -3, "-3 + 0 = -3")
// console.log(calculate(-3,"-", 0), -3, "-3 - 0 = -3")
console.log(calculate(-3,"/", 0), null, "-3 / 0 = null")
console.log(calculate(-3,"*", 0), 0, "-3 * 0 = 0")
console.log(calculate(-3,"w", 0), null, "-3 w 0 = null")