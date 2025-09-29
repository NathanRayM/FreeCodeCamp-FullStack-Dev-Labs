//build-a-boolean-check-function

function booWho(bool) {
  return typeof bool === "boolean";
}

console.log(booWho(true));
console.log(booWho(false));
console.log(booWho("true"));
console.log(booWho(1));
console.log(booWho(null));
console.log(booWho(undefined));
console.log(booWho(Boolean(true)));
console.log(booWho(new Boolean(true)));

/* EXPECTED OUTPUT
true
true
false
false
false
false
true
false
*/
