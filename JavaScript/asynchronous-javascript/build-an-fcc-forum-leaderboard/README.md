# Build An FCC Forum Leaderboard

**Description:**  
In this lab, I built a dynamic freeCodeCamp forum leaderboard that fetches and displays the latest forum topics using asynchronous JavaScript. The application retrieves live data from the freeCodeCamp forum API and renders a table of posts including:

- Post title and category
- User avatars
- Number of replies
- View count
- Time since last activity

This project demonstrates working with real-world API data, transforming nested JSON structures, and dynamically updating the DOM using vanilla JavaScript.

**Technologies Used:**

- HTML
- CSS
- JavaScript (Vanilla JS)
- Fetch API
- Async/Await

**File Structure:**

```
build-an-fcc-forum-leaderboard/
├── index.html   # Main HTML structure and table layout
├── styles.css   # Styling for leaderboard layout and avatars
├── script.js    # API fetching, data processing, and DOM rendering
└── README.md    # Project documentation
```

**Setup / How to Run:**

1. Clone or download the repository.
2. Open the project folder.
3. Open index.html in your browser.
4. The app will automatically fetch the latest forum data and render the leaderboard.

**Learning Outcomes:**

- Working with asynchronous JavaScript using fetch() and async/await
- Parsing and navigating deeply nested JSON data
- Relating data across multiple arrays (e.g., matching user_id to id)
- Using map() for data transformation and dynamic rendering
- Building reusable helper functions for formatting and rendering
- Handling conditional logic for edge cases (e.g., relative image paths)
- Dynamically updating the DOM using template literals
- Debugging test-driven requirements and matching expected output structure
- Creating mock data for testing API-based functions
