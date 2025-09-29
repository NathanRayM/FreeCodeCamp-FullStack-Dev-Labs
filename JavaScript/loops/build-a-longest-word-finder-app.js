// build-a-longest-word-finder-app

function findLongestWordLength(string) {
  let words = string.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
/*
EXPECTED OUTPUT

6

*/
