// implement-a-dna-pair-generator

function pairElement(str) {
  let arrDNA = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") arrDNA.push([str[i], "T"]);
    else if (str[i] === "T") arrDNA.push([str[i], "A"]);
    else if (str[i] === "C") arrDNA.push([str[i], "G"]);
    else if (str[i] === "G") arrDNA.push([str[i], "C"]);
  }
  return arrDNA;
}
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

/*
EXPECTED OUTPUT

[
  [ 'A', 'T' ],
  [ 'T', 'A' ],
  [ 'C', 'G' ],
  [ 'G', 'C' ],
  [ 'A', 'T' ]
]
[
  [ 'T', 'A' ],
  [ 'T', 'A' ],
  [ 'G', 'C' ],
  [ 'A', 'T' ],
  [ 'G', 'C' ]
]
[
  [ 'C', 'G' ],
  [ 'T', 'A' ],
  [ 'C', 'G' ],
  [ 'T', 'A' ],
  [ 'A', 'T' ]
]
*/
