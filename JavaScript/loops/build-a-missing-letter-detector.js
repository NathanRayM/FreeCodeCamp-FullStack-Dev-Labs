function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let currentStr = str.charCodeAt(i);
    let newStr = currentStr + 1;
    if (str.charCodeAt(i + 1) !== newStr) {
      return String.fromCharCode(newStr);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
