// build-an-optional-arguments-sum-function

function addTogether(num1, num2) {
  if (typeof num1 !== "number") {
    return undefined;
  }

  if (typeof num2 === "number") {
    return num1 + num2;
  }

  if (arguments.length === 1) {
    return function (second) {
      if (typeof second === "number") {
        return num1 + second;
      }
      return undefined;
    };
  }

  return undefined;
}

console.log(addTogether(2, 3));
console.log(addTogether(23.4, 30));
console.log(addTogether(5, undefined));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(5));

/*
EXPECTED OUTPUT

5
53.4
undefined
undefined
[Function (anonymous)]

*/
