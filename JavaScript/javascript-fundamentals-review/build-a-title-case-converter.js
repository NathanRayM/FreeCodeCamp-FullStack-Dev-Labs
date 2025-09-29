// build-a-title-case-converter

function titleCase(str) {
  str = str.toLowerCase().split(" ");

  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

/*
EXPECTED OUTPUT

I'm A Little Tea Pot
Short And Stout
Here Is My Handle Here Is My Spout

*/
