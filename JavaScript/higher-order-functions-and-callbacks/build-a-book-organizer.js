// build-a-book-organizer

let books = [
  {
    title: "Clean Code",
    authorName: "Robert C. Martin",
    releaseYear: 2008,
  },

  {
    title: "The Pragmatic Programmer",
    authorName: "Andrew Hunt and David Thomas",
    releaseYear: 1999,
  },
  {
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    authorName: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    releaseYear: 1930,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) return -1;
  if (book1.releaseYear > book2.releaseYear) return 1;
  return 0;
}

let filteredBooks = books.filter((book) => book.releaseYear > 1950);

console.log(filteredBooks.sort(sortByYear));

/*
EXPECTED OUTPUT

[
  {
    title: 'The Pragmatic Programmer',
    authorName: 'Andrew Hunt and David Thomas',
    releaseYear: 1999
  },
  {
    title: 'Clean Code',
    authorName: 'Robert C. Martin',
    releaseYear: 2008
  }
]
*/
