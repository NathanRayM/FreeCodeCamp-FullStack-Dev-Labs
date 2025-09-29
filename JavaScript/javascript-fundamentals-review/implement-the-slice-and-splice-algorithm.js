// implement-the-slice-and-splice-algorithm

function frankenSplice(arr1, arr2, n) {
  let arr2Front = arr2.slice(0, n);
  let arr2Back = arr2.slice(n);
  return [...arr2Front, ...arr1, ...arr2Back];
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);

/*
EXPECTED OUTPUT

[ 4, 1, 2, 3, 5 ]
[ 'a', 1, 2, 'b' ]
[ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]

 */
