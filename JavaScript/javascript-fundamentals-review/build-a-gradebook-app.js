// build-a-gradebook-app

//step 1

function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));
console.log(getAverage([10, 20, 30, 40, 55, 65, 75, 83]));
console.log(getAverage([10, 20, 30, 40, 50, 60, 70, 97]));

//step 2

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

//step 3 & 4

function hasPassingGrade(score) {
  if (getGrade(score) !== "F") {
    return true;
  } else {
    return false;
  }
}

//step 5
function studentMsg(classScores, studentScore) {
  let average = getAverage(classScores);
  let grade = getGrade(studentScore);
  let passed = hasPassingGrade(studentScore);
  if (passed) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));

/*
EXPECTED OUTPUT

71.7
85.4
92.4
47.25
47.125
Class average: 71.7. Your grade: F. You failed the course.
Class average: 50.8. Your grade: A+. You passed the course.
Class average: 48.25. Your grade: B. You passed the course.
Class average: 45.625. Your grade: C. You passed the course.

*/
