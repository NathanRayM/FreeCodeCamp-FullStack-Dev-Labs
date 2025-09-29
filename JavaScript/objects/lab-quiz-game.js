// lab-quiz-game

const questions = [
  {
    category: "Programming",
    question: "Which language runs in a web browser?",
    choices: ["Java", "C", "JavaScript"],
    answer: "JavaScript",
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["3", "4", "5"],
    answer: "4",
  },
  {
    category: "Geography",
    question: "Which country has the largest population?",
    choices: ["India", "USA", "China"],
    answer: "China",
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington",
  },
];

function getRandomQuestion(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);

console.log("Question:", selectedQuestion.question);
console.log("Computer chose:", computerChoice);
console.log(getResults(selectedQuestion, computerChoice));

/*
EXPECTED OUTPUT

Question: Which language runs in a web browser?
Computer chose: C
The computer's choice is wrong. The correct answer is: JavaScript

*/
