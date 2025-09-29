// implement-the-chunky-monkey-algorithm

function chunkArrayInGroups(array, number) {
  let result = [];

  for (let i = 0; i < array.length; i += number) {
    result.push(array.slice(i, i + number));
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

/*
EXPECTED OUTPUT

[ [ 'a', 'b' ], [ 'c', 'd' ] ]
[ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
[ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]
[ [ 0, 1, 2, 3 ], [ 4, 5 ] ]
[ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6 ] ]

*/
