function translatePigLatin(str) {
  return str
    .split(" ")
    .map((word) => {
      const firstVowelIndex = word.search(/[aeiou]/i);
      if (firstVowelIndex === 0) {
        return word + "way";
      } else if (firstVowelIndex > 0) {
        return (
          word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay"
        );
      } else {
        return word + "ay";
      }
    })
    .join(" ");
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
