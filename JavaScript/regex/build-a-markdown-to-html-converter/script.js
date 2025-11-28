const markDownInput = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output");
const preview = document.querySelector("#preview");

function convertMarkdown() {
  const text = markDownInput.value;

  const newText = text
    .replace(/^### (.*?)$/gm, "<h3>$1</h3>")
    .replace(/^## (.*?)$/gm, "<h2>$1</h2>")
    .replace(/^# (.*?)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.*?)__/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/_(.*?)_/g, "<em>$1</em>")
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    .replace(/^> ?(.*)/gm, "<blockquote>$1</blockquote>");

  preview.innerHTML = newText;
  htmlOutput.innerText = newText;

  return newText;
}

markDownInput.addEventListener("input", convertMarkdown);
