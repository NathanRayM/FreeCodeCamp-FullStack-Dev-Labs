// build-a-factorial-calculator

let num = 5;

function factorialCalculator(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

/* 
  EXPECTED OUTPUT

  Factorial of 5 is 120
*/
