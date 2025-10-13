const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  const textLength = textInput.value.length;
  charCount.textContent = `Character Count: ${textLength}/50`;

  if (textLength > 50) {
    textInput.value = textInput.value.slice(0, 50);
  }
  if (textLength === 50) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "darkslategray";
  }
});
