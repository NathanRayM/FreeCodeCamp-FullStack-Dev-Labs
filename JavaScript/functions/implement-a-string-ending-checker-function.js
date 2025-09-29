//implement-a-string-ending-checker-function

function confirmEnding(str, target) {
  let ending = str.slice(-target.length);
  return ending === target;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water", "ater"));
console.log(confirmEnding("OpenAI is cool", "cool!"));

/*
EXPECTED OUTPUT

true
true
false
true
false

*/
