// lab-sum-all-numbers-algorithm

function sumAll(arr) {
  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);
  let sum = 0;
  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));

/*
EXPECTED OUTPUT

10
10
45
45

 */
