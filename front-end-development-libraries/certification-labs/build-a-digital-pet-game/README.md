# Build a Digital Pet Game

**Description:**
In this lab, I built an interactive digital pet game using React and TypeScript that allows users to name and care for a virtual pet. The application tracks the pet’s hunger, energy, and happiness levels and dynamically determines the pet’s mood based on its current stats.

n this lab, I built an interactive digital pet game using React and TypeScript that allows users to name and care for a virtual pet. The application tracks the pet’s hunger, energy, and happiness levels, which change based on actions such as eating, playing, and sleeping.

The project uses TypeScript enums to define pet actions and moods, along with a Record<PetMood, string> to map each mood to an emoji. React’s useState manages the pet’s stats and game state, while useEffect handles timed state changes. The pet’s current mood is dynamically calculated from its stats and displayed in the interface.

The goal of this exercise was to practice combining React state management and hooks with TypeScript enums, records, typed functions, event handling, conditional rendering, and reusable application logic while maintaining strong type safety.

**Technologies Used:**

- HTML5
- CSS3
- React
- TypeScript
- TSX
- React Hooks (useState, useEffect)
- TypeScript Enums
- TypeScript Record Utility Type
- Event Handling
- Form Handling
- Conditional Rendering
- State Management
- Timers (setTimeout, clearTimeout)

**File Structure:**

```
build-a-digital-pet-game/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
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

```
npm run dev
```

5. Open the local development URL provided in the terminal.
6. Enter a name for the pet and select Start Game to begin.

**Learning Outcomes:**

- Creating React components with TypeScript and TSX
- Managing application state with the React useState hook
- Using useEffect to perform timed state updates
- Cleaning up timers with clearTimeout
- Defining related constants using TypeScript enums
- Passing enum values as typed function arguments
- Creating strongly typed mappings with Record<PetMood, string>
- Using enum values as keys to retrieve corresponding values from a Record
- Creating typed functions with parameter and return type annotations
- Deriving pet moods from hunger, energy, and happiness state
- Handling form submissions with typed React events
- Typing DOM elements using TypeScript type assertions
- Updating React state with functional state updater callbacks
- Using a switch statement to process different pet actions
- Creating reusable helper functions to constrain numeric values
- Conditionally rendering React elements based on application state
- Dynamically displaying state values in JSX
- Understanding how state changes trigger React component re-renders
- Combining React state management with TypeScript’s type system
