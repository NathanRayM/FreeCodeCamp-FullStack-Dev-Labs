# Build a Weather App

**Description:**  
In this lab, I built a dynamic weather application that retrieves real-time weather data for selected cities using asynchronous JavaScript. The app fetches data from a weather API and displays current weather conditions, including:

- City name
- Weather condition and icon
- Temperature (°C)
- Feels like temperature
- Humidity
- Wind speed
- Wind gusts
- Wind direction (dynamic compass rotation)

The application demonstrates working with live API data, handling asynchronous operations, managing errors gracefully, and dynamically updating the DOM using vanilla JavaScript.

**Technologies Used:**

- HTML
- CSS
- JavaScript (Vanilla JS)
- Fetch API
- Async/Await
- Optional Chaining (?.)
- Nullish Coalescing (??)
- CSS Transforms (for compass rotation)

**File Structure:**

```
build-a-weather-app/
├── index.html   # Main HTML structure and UI layout
├── styles.css   # Styling for layout, weather display, and compass
├── script.js    # API fetching, error handling, and DOM updates
└── README.md    # Project documentation
```

**Setup / How to Run:**

1. Clone or download the repository.
2. Open the project folder.
3. Open index.html in your browser.
4. Select a city from the dropdown menu.
5. Click **Get Weather** to fetch and display current weather data.

**Learning Outcomes:**

- Working with asynchronous JavaScript using fetch() and async/await
- Implementing structured error handling and fallback logic
- Safely accessing deeply nested object properties
- Using conditional rendering patterns in vanilla JavaScript
- Manipulating the DOM dynamically based on API responses
- Applying CSS transforms dynamically via JavaScript
- Debugging test-driven requirements to match expected behavior
- Building a complete API-driven UI from scratch
