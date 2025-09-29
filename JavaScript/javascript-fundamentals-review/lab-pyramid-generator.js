// lab-pyramid-generator

function pyramid(pattern, rows, upsideDown) {
  const base = 2 * rows - 1;
  const lines = [];

  function makeRow(width) {
    const leftPad = (base - width) / 2;
    return " ".repeat(leftPad) + pattern.repeat(width);
  }
  if (!upsideDown) {
    for (let w = 1; w <= base; w += 2) {
      lines.push(makeRow(w));
    }
  } else {
    for (let w = base; w >= 1; w -= 2) {
      lines.push(makeRow(w));
    }
  }
  return "\n" + lines.join("\n") + "\n";
}
console.log(pyramid("o", 4, false));

/*
EXPECTED OUTPUT 

   o
  ooo
 ooooo
ooooooo
 */
