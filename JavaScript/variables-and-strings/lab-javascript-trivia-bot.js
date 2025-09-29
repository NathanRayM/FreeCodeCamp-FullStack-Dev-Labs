//lab-javascript-trivia-bot

console.log("Hello! I'm your coding fun fact guide!");

const botName = "Codey";
const botLocation = "the Internet";
const favoriteLanguage = "JavaScript";

console.log("My name is " + botName + " and I live on " + botLocation + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");

let codingFact =
  favoriteLanguage + " was created in just 10 days by Brendan Eich in 1995.";
console.log(codingFact);

codingFact = favoriteLanguage + " is used on over 98% of all websites today.";
console.log(codingFact);

codingFact =
  "One fun thing about " +
  favoriteLanguage +
  " is that it can run both in the browser and on servers with Node.js.";
console.log(codingFact);

console.log(
  "It was fun sharing these facts with you. Goodbye! - " +
    botName +
    " from " +
    botLocation +
    "."
);

/*
EXPECTED OUTPUT

Hello! I'm your coding fun fact guide!
My name is Codey and I live on the Internet.
My favorite programming language is JavaScript.
JavaScript was created in just 10 days by Brendan Eich in 1995.
JavaScript is used on over 98% of all websites today.
One fun thing about JavaScript is that it can run both in the browser and on servers with Node.js.
It was fun sharing these facts with you. Goodbye! - Codey from the Internet.
*/
