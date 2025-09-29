// lab-symmetric-difference

function diffArray(arr1, arr2) {
  let filterArr1 = arr1.filter((item) => !arr2.includes(item));
  let filterArr2 = arr2.filter((item) => !arr1.includes(item));
  return filterArr1.concat(filterArr2);
}
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"]
  )
);

console.log(
  diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"])
);

console.log(
  diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"])
);

console.log(diffArray([], ["apple", "banana"]));

console.log(diffArray([], []));

/*
EXPECTED OUTPUT

[ 'pink wool' ]
[ 'diorite', 'pink wool' ]
[ 'car', 'train', 'plane' ]
[ 'banana', 'grape' ]
[ 'apple', 'banana' ]
[]

*/
