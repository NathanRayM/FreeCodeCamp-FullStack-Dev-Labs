// build-a-string-inverter

let string = "hello";
function reverseString(string) {
  let stringSplit = string.split("");
  let stringRev = stringSplit.reverse();
  let stringJoin = stringRev.join("");
  return stringJoin;
}
console.log(reverseString("hello"));

/*
EXPECTED OUTPUT

olleh

*/
