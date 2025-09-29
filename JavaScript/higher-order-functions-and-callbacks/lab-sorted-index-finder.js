// lab-sorted-index-finder

function getIndexToIns(arr, num) {
  let sortNum = arr.sort((a, b) => a - b);
  let findIndex = sortNum.findIndex((number) => number >= num);

  if (findIndex === -1) {
    return sortNum.length;
  } else {
    return findIndex;
  }
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([10, 20, 30, 40, 50], 60));

/*
EXPECTED OUTPUT

3
2
1
0
2
2
5
 */
