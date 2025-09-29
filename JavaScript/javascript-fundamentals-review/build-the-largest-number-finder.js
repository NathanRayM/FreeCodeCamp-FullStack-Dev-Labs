// build-the-largest-number-finder

function largestOfAll(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    let subArray = arr[i];
    let largest = subArray[0];

    for (let j = 1; j < subArray.length; j++) {
      if (subArray[j] > largest) {
        largest = subArray[j];
      }
    }
    results.push(largest);
  }
  return results;
}

console.log(
  largestOfAll([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

console.log(
  largestOfAll([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);

console.log(
  largestOfAll([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);

/*
EXPECTED OUTPUT

[ 5, 27, 39, 1001 ]
[ 9, 35, 97, 1000000 ]
[ 25, 48, 21, -3 ]

*/
