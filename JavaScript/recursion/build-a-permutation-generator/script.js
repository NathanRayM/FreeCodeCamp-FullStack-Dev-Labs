function permuteString(string, prefix = "", resultArr = []) {
  if (string.length === 0) {
    resultArr.push(prefix);
    return resultArr;
  }
  for (let i = 0; i < string.length; i++) {
    let remainder = string.slice(0, i) + string.slice(i + 1);
    permuteString(remainder, prefix + string[i], resultArr);
  }
  return [...new Set(resultArr)];
}

console.log(permuteString("far"));
console.log(permuteString("fcc"));
console.log(permuteString("p"));
console.log(permuteString(""));
console.log(permuteString("walk"));
