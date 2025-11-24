//Main Variables
const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");

//Check Box Variables
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

// Function for global and case insensitive flags
function getFlags() {
  if (caseInsensitiveFlag.checked && globalFlag.checked) {
    return "ig";
  } else if (caseInsensitiveFlag.checked) {
    return "i";
  } else if (globalFlag.checked) {
    return "g";
  } else {
    return "";
  }
}

//Click Event
testButton.addEventListener("click", function () {
  const patternValue = regexPattern.value;
  const flags = getFlags();
  const regex = new RegExp(patternValue, flags);
  const text = stringToTest.innerHTML;
  if (regex.test(text)) {
    const highlighted = text.replace(regex, function (match) {
      return `<span class="highlight">${match}</span>`;
    });
    stringToTest.innerHTML = highlighted;
  }
  const matches = text.match(regex);
  if (matches) {
    testResult.innerHTML = matches.join(", ");
  } else {
    testResult.innerHTML = "no match";
  }
});
