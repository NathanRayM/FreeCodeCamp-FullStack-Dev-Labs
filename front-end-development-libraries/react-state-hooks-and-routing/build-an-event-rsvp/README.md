# Build an Event RSVP Form

**Description:**  
In this lab, I built an interactive Event RSVP form using React functional components and hooks. The application allows users to enter their name, email, number of attendees, optional dietary preferences, and indicate whether they are bringing additional guests.

Upon form submission, the app conditionally renders a confirmation message displaying the submitted RSVP details. The goal of this exercise was to practice working with controlled form inputs, managing multiple pieces of component state, handling form submission events, and conditionally rendering UI based on user interaction.

This project reinforces fundamental React concepts such as controlled components, event handling, and using state as a single source of truth for UI rendering.

**Technologies Used:**

- HTML
- CSS
- JavaScript (ES6)
- React (Functional Components)
- JSX
- React Hooks (`useState`)
- ReactDOM

**File Structure:**

```
build-an-event-rsvp/
├── index.html   # Root HTML file that loads React and renders the EventRSVPForm component
├── styles.css   # Styling for layout and visual presentation
├── index.jsx    # React EventRSVPForm component with form handling and conditional rendering
└── README.md    # Project documentation
```

**Setup / How to Run:**

1. Clone or download the repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Fill out the RSVP form and submit to view the confirmation message.

**Learning Outcomes:**

- Managing multiple form inputs using the `useState` hook
- Creating controlled components in React
- Handling form submission events with `onSubmit`
- Preventing default browser form behavior
- Conditionally rendering UI based on application state
- Working with checkbox inputs and boolean state
- Structuring interactive UI components using React functional patterns
- Rendering React components to the DOM using ReactDOM
