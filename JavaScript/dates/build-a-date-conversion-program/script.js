const currentDate = new Date();
const currentDateFormat = "Current Date and Time: " + currentDate;
console.log(currentDateFormat);

function formatDateMMDDYYYY(dateString) {
  const date = new Date(dateString);
  let convertedDate = date.toLocaleDateString();
  return "Formatted Date (MM/DD/YYYY): " + convertedDate;
}
console.log(
  formatDateMMDDYYYY(
    "Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time)"
  )
);

function formatDateLong(dateString) {
  const date = new Date(dateString);
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  let convertedDate = date.toLocaleDateString("en-US", options);
  return "Formatted Date (Month Day, Year): " + convertedDate;
}
console.log(
  formatDateLong("Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time)")
);
