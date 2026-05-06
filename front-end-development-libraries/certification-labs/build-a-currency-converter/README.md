# Build a Currency Converter

**Description:**  
In this lab, I built an interactive currency converter using React functional components and hooks. The application allows users to enter an amount, choose a starting currency, select a target currency, and instantly view the converted value based on predefined exchange rates.

The goal of this exercise was to practice managing form state with React, creating controlled form elements, performing dynamic calculations based on user input, and optimizing calculations using the `useMemo` hook.

The app also demonstrates how memoization can improve performance by preventing unnecessary recalculations when unrelated state values change.

**Technologies Used:**

- HTML
- CSS
- JavaScript (ES6)
- React (Functional Components)
- JSX
- React Hooks (`useState`, `useMemo`)
- ReactDOM

**File Structure:**

```
build-a-currency-converter/
├── index.html   # Root HTML file that loads React and renders the CurrencyConverter component
├── styles.css   # Styling for layout and visual presentation
├── index.jsx    # React CurrencyConverter component with conversion logic and memoization
└── README.md    # Project documentation
```

**Setup / How to Run:**

1. Clone or download the repository.
2. Open the project folder.
3. Open index.html in your browser.
4. Enter an amount and select currencies to view the converted value.

**Learning Outcomes:**

- Managing component state using the useState hook
- Creating controlled form inputs in React
- Handling user input with event listeners
- Working with <input> and <select> form elements
- Performing dynamic calculations based on state changes
- Using the useMemo hook to memoize expensive calculations
- Understanding dependency arrays in React hooks
- Formatting numeric output using toFixed()
- Structuring interactive components using React functional patterns
- Rendering React components to the DOM using ReactDOM
