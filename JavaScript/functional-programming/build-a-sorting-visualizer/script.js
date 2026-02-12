// Variables
const generateButton = document.getElementById("generate-btn");
const sortButton = document.getElementById("sort-btn");
const startingArr = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");

// Function to generate random number
function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

// Recursive function to generate an array of 5 numbers
function generateArray(arr = []) {
  let number = generateElement();
  if (arr.length === 5) {
    return arr;
  } else {
    arr.push(number);
    return generateArray(arr);
  }
}

// Function to create an empty div
function generateContainer() {
  return document.createElement("div");
}

// Function to create span with integers from array
function fillArrContainer(element, arr) {
  element.innerHTML = "";
  arr.forEach((num) => {
    const span = document.createElement("span");
    span.textContent = num;
    element.appendChild(span);
  });
}

// Function to check if previous integer is less than next
function isOrdered(numOne, numTwo) {
  return numOne <= numTwo;
}

// Function to swap array elements
function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    let temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
}
// Function to add dashed border to the element index
function highlightCurrentEls(element, index) {
  const children = element.children;
  if (index < children.length) {
    children[index].style.border = "2px dashed red";
  }
  if (index + 1 < children.length) {
    children[index + 1].style.border = "2px dashed red";
  }
}

// Click event to fill array field and spans
generateButton.addEventListener("click", () => {
  while (arrayContainer.children.length > 1) {
    arrayContainer.removeChild(arrayContainer.lastElementChild);
  }
  startingArr.innerHTML = "";

  let arr = generateArray();
  fillArrContainer(startingArr, arr);
  sortButton.style.display = "block";
});

// Click event for bubble sort
sortButton.addEventListener("click", () => {
  while (arrayContainer.children.length > 1) {
    arrayContainer.removeChild(arrayContainer.lastElementChild);
  }

  if (startingArr.children.length === 0) {
    let arr = generateArray();
    fillArrContainer(startingArr, arr);
  }

  let spans = Array.from(startingArr.children);
  let spanArr = spans.map((span) => Number(span.textContent));

  fillArrContainer(startingArr, spanArr);
  highlightCurrentEls(startingArr, 0);

  let swapped = true;

  let steps = 0;

  while (swapped) {
    swapped = false;

    for (let j = 0; j < spanArr.length - 1; j++) {
      if (steps !== 0) {
        let stepDiv = generateContainer();
        fillArrContainer(stepDiv, spanArr);
        highlightCurrentEls(stepDiv, j);
        arrayContainer.appendChild(stepDiv);
      }

      if (!isOrdered(spanArr[j], spanArr[j + 1])) {
        swapElements(spanArr, j);
        swapped = true;
      }

      steps++;
    }
  }

  let sortedDiv = generateContainer();
  fillArrContainer(sortedDiv, spanArr);
  arrayContainer.appendChild(sortedDiv);
  sortedDiv.style.border = "4px solid green";
  sortButton.style.display = "none";
});
