"use strict";
//DOM Elements
const frontTextArea = document.getElementById("front-text");
const backTextArea = document.getElementById("back-text");
const submitBtn = document.getElementById("submit-btn");
const deleteBtn = document.querySelector(".delete-btn");
const form = document.getElementById("entry-form");
const flashCard = document.getElementById("flashcard");
const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back");
const errorMessage = document.getElementById("entry-error");
// array/object of cards
const currentCards = [
    {
        questionText: "What is the capitol of France?",
        questionAnswer: "Paris",
    },
    {
        questionText: "What is the capitol of the UK?",
        questionAnswer: "London",
    },
    {
        questionText: "What is the capitol of the USA",
        questionAnswer: "Washington DC",
    },
];
function addCard(question, answer) {
    currentCards.push({
        questionText: question,
        questionAnswer: answer,
    });
    return (cardFront.textContent = question), (cardBack.textContent = answer);
}
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
        if (frontTextArea.value.trim() === "" || backTextArea.value.trim() === "") {
            throw new Error("InvalidUserInputError");
        }
        else {
            addCard(frontTextArea.value.trim(), backTextArea.value.trim());
        }
    }
    catch (error) {
        console.error(`InvalidUserInputError`, error);
        errorMessage.textContent = "InvalidUserInputError";
    }
});
flashCard.addEventListener("click", () => {
    flashCard.classList.toggle("flipped");
});
deleteBtn?.addEventListener("click", () => {
    console.log(currentCards.pop());
    let newIndex = currentCards.length - 1;
    let updated = currentCards[newIndex];
    cardFront.textContent = updated.questionText;
    cardBack.textContent = updated.questionAnswer;
});
// Random card on page load
document.addEventListener("DOMContentLoaded", () => {
    const randomIndex = Math.floor(Math.random() * currentCards.length);
    const randomCard = currentCards[randomIndex];
    cardFront.textContent = randomCard.questionText;
    cardBack.textContent = randomCard.questionAnswer;
});
