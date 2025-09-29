// truncate-a-string

function truncateString(string, number) {
  if (string.length > number) {
    return string.slice(0, number) + "...";
  } else {
    return string;
  }
}
let number = 10;
let text = "This string is way too long and should be shorter";
let result = truncateString(text, number);
console.log(result);

/* 
EXPECTED OUTPUT

This strin...

*/
