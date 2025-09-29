//build-a-sentence-maker

let adjective = "brave";
let noun = "dragon";
let verb = "angry";
let place = "castle";
let adjective2 = "fiery";
let noun2 = "tacos";

let firstStory =
  "Once upon a time, there was a(n) " +
  adjective +
  " " +
  noun +
  " who loved to eat " +
  noun2 +
  ". The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";
console.log("First story: " + firstStory);

adjective = "silly";
noun = "wizard";
verb = "dancing";
place = "forest";
adjective2 = "sparkly";
noun2 = "marshmallows";

let secondStory =
  "Once upon a time, there was a(n) " +
  adjective +
  " " +
  noun +
  " who loved to eat " +
  noun2 +
  ". The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";
console.log("Second story: " + secondStory);
/*
EXPECTED OUTPUT

First story: Once upon a time, there was a(n) brave dragon who loved to eat tacos. The dragon lived in a castle and had fiery nostrils that blew fire when it was angry.
Second story: Once upon a time, there was a(n) silly wizard who loved to eat marshmallows. The wizard lived in a forest and had sparkly nostrils that blew fire when it was dancing.
*/
