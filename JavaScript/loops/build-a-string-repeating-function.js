// build-a-string-repeating-function

function repeatStringNumTimes(string, number) {
  let result = "";

  for (let i = 0; i < number; i++) {
    result += string;
  }
  return result;
}
console.log(repeatStringNumTimes("*", 3));

/*
EXPECTED OUTPUT

***

*/
