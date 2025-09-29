//build-a-celsius-to-fahrenheit-converter

function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
console.log(convertCtoF(40));
console.log(convertCtoF(70));
console.log(convertCtoF(20));
console.log(convertCtoF(10));

/*
EXPECTED OUTPUT
104
158
68
50
*/
