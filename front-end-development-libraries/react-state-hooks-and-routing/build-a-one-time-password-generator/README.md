# Build a One Time Password Generator

**Description:**  
In this lab, I built an interactive One Time Password (OTP) generator using React functional components and hooks. The application generates a random six-digit OTP when the user clicks the "Generate OTP" button and starts a countdown timer indicating when the OTP will expire.

The goal of this exercise was to practice managing multiple pieces of state, handling side effects such as timers using the `useEffect` hook, persisting values across renders with `useRef`, and conditionally rendering UI based on application state.

The app also demonstrates disabling user interaction during an active countdown and displaying appropriate UI feedback when the OTP expires.

**Technologies Used:**

- HTML
- CSS
- JavaScript (ES6)
- React (Functional Components)
- JSX
- React Hooks (`useState`, `useEffect`, `useRef`)
- ReactDOM

**File Structure:**

```
build-a-one-time-password-generator/
├── index.html   # Root HTML file that loads React and renders the OTPGenerator component
├── styles.css   # Styling for layout and visual presentation
├── index.jsx    # React OTPGenerator component with timer logic and state management
└── README.md    # Project documentation
```

**Setup / How to Run:**

1. Clone or download the repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Click the "Generate OTP" button to create a new OTP and start the expiration countdown.

**Learning Outcomes:**

- Managing multiple state values using the `useState` hook
- Implementing countdown timers using `useEffect`
- Cleaning up side effects to prevent memory leaks
- Persisting interval references using `useRef`
- Conditionally rendering UI based on application state
- Disabling UI interactions during asynchronous processes
- Structuring interactive components using React functional patterns
- Rendering React components to the DOM using ReactDOM
