function myReplace(string, word, replacement) {
  return string.replace(new RegExp(word, "i"), function (match) {
    if (match.charAt(0) === match.charAt(0).toUpperCase()) {
      return replacement.charAt(0).toUpperCase() + replacement.slice(1);
    } else {
      return replacement.toLowerCase();
    }
  });
}
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
