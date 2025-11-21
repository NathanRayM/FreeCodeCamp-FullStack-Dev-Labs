const checkBtn = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", palinDrome);

function palinDrome() {
  const original = textInput.value;

  if (original === "") {
    alert("Please input a value");
  } else if (original.length === 1) {
    result.textContent = `${original} is a palindrome.`;
    result.classList.remove("hidden");
  }
  const cleanedStr = original.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  if (cleanedStr === reversedStr) {
    result.textContent = `${original} is a palindrome.`;
    result.classList.remove("hidden");
  } else if (cleanedStr !== reversedStr) {
    result.textContent = `${original} is not a palindrome.`;
    result.classList.remove("hidden");
  }
}
