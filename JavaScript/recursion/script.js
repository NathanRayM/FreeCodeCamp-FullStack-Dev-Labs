// Build A Countdown

function countdown(num) {
  if (num < 1) {
    return [];
  } else {
    return [num].concat(countdown(num - 1));
  }
}
console.log(countdown(5));

//Output [5, 4, 3, 2, 1]
