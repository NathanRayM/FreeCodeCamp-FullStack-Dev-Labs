// implement-the-mutations-algorithm

function mutation(array) {
  let firstStr = array[0].toLowerCase();
  let secondStr = array[1].toLowerCase();

  for (let char of secondStr) {
    if (!firstStr.includes(char)) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "HELLO"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));

/*
EXPECTED OUTPUT

true
false
true

*/
