// create-a-deep-flattening-tool

function steamrollArray(arr) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(steamrollArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
}
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));

/*
EXPECTED OUTPUT

[ 'a', 'b' ]
[ 1, 2, 3, 4 ]
[ 1, 3, 4 ]
[ 1, {}, 3, 4 ]

 */
