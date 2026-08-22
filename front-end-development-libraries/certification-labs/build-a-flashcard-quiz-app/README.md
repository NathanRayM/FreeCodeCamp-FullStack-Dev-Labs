# Build a FlashCard Quiz App

**Description:**
In this lab, I built a flashcard quiz application using TypeScript that allows users to view, flip, add, and delete flashcards. The application stores flashcard data in a strongly typed collection and dynamically updates the displayed question and answer based on user interaction.

The project uses a FlashCard interface to define the structure of each flashcard object, with questionText and questionAnswer properties. Flashcards are stored in a FlashCard[] array, and users can add new cards through a form, flip the current card to reveal the answer, and delete cards from the collection.

The application also includes input validation to prevent empty flashcards from being submitted. When invalid input is detected, an InvalidUserInputError message is displayed. On page load, a random flashcard from the collection is selected and rendered to the page.

The goal of this exercise was to practice working with TypeScript interfaces, typed arrays, DOM element type assertions, event handling, form validation, array methods, error handling, and dynamic DOM updates while maintaining type safety throughout the application.

**Technologies Used:**

- HTML5
- CSS3
- TypeScript
- TypeScript Interfaces
- DOM Manipulation
- Event Listeners
- Form Handling
- Error Handling
- Array Methods (push(), pop())
- Math Methods (Math.random(), Math.floor())

**File Structure:**

```
build-a-flashcard-quiz-app/
├── dist/
│   └── index.js
├── index.html
├── styles.css
├── index.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

**Setup / How to Run:**

1. Clone or download the repository.
2. Open the project folder.
3. Install dependencies:

```
npm install
```

4. Compile the TypeScript:

```
npx tsc
```

    (Optional: use npx tsc --watch to automatically recompile when changes are saved.)

5. Open the project using a local development server (such as the VS Code Live Server extension).
6. View the application in your browser.

**Learning Outcomes:**

- Defining application data structures using TypeScript interfaces
- Creating and working with strongly typed arrays using FlashCard[]
- Typing DOM elements with TypeScript type assertions
- Selecting and manipulating DOM elements
- Handling form submissions with event listeners
- Preventing default form submission behavior with preventDefault()
- Reading and trimming values from textarea elements
- Validating user input before modifying application state
- Using try...catch for error handling
- Displaying validation errors dynamically in the DOM
- Adding new objects to a typed array using push()
- Removing flashcards from an array using pop()
- Accessing the previous flashcard after deleting the current card
- Dynamically updating question and answer text with textContent
- Toggling CSS classes with classList.toggle()
- Creating a card-flipping interaction with the flipped class
- Generating a random array index using Math.random() and Math.floor()
- Rendering a random flashcard when the page initially loads
- Using optional chaining when working with potentially nullable DOM elements
- Connecting TypeScript application state with interactive DOM behavior
- Compiling TypeScript into JavaScript using the TypeScript compiler (tsc)
