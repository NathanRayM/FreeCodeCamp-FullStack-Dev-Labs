// implement-an-html-entity-converter

function convertHTML(str) {
  let newStr = str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

  return newStr;
}
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));

/*
EXPECTED OUTPUT

Dolce &amp; Gabbana
Hamburgers &lt; Pizza &lt; Tacos
Sixty &gt; twelve
Stuff in &quot;quotation marks&quot;
Schindler&apos;s List
&lt;&gt;
abc

*/
