//Variables
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookMarkButton = document.getElementById("add-bookmark-button");
const closeFormButton = document.getElementById("close-form-button");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const addBookmarkButtonForm = document.getElementById(
  "add-bookmark-button-form"
);
const bookMarkList = document.getElementById("bookmark-list-section");
const categoryList = document.getElementById("category-list");
const viewCategoryButton = document.getElementById("view-category-button");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

//STEP 1 and 2

/*Function to get the bookmark data*/
function getBookmarks() {
  const bookmarksValue = localStorage.getItem("bookmarks");

  /*If key is not set return an empty array*/
  if (bookmarksValue === null) {
    return [];
  }
  /*Parse the JSON from local storage to an object*/
  let bookmarksParse;

  try {
    bookmarksParse = JSON.parse(bookmarksValue);
  } catch (error) {
    return [];
  }

  /*If not an array return an empty array*/
  if (!Array.isArray(bookmarksParse)) {
    return [];
  }

  /*Loop through the parsed local storage bookmark*/
  for (const item of bookmarksParse) {
    if (item === null || typeof item !== "object" || Array.isArray(item)) {
      return [];
    }

    if (
      typeof item.name !== "string" ||
      typeof item.category !== "string" ||
      typeof item.url !== "string"
    ) {
      return [];
    }
  }
  /* Return Bookmarks key from local storage */
  return bookmarksParse;
}

//Step 3
function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

//Step 4
addBookMarkButton.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm();
});

//Step 5
closeFormButton.addEventListener("click", () => {
  formSection.classList.add("hidden");
  mainSection.classList.remove("hidden");
});

//Step 6 and 7
addBookmarkButtonForm.addEventListener("click", (e) => {
  e.preventDefault();

  const bookmarks = getBookmarks();

  const newObject = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value,
  };
  bookmarks.push(newObject);

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  nameInput.value = "";
  urlInput.value = "";

  displayOrCloseForm();
});

//Step 8
function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookMarkList.classList.toggle("hidden");
}

//Step 9, 10, 11, and 12
viewCategoryButton.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;
  categoryList.innerHTML = "";

  const bookmarks = getBookmarks();
  const selectedCategory = categoryDropdown.value;
  const matches = bookmarks.filter(
    (bookmark) => bookmark.category === selectedCategory
  );

  if (matches.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    matches.forEach((match) => {
      const radioId = match.name;
      categoryList.innerHTML += `<input id="${radioId}" type="radio" value="${radioId}" name="bookmark">
    <label for="${radioId}"><a href="${match.url}" name="${match.name}">${match.name}</a>
    </label>`;
    });
  }
  displayOrHideCategory();
});

//Step 13
closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
});

//Step 14
deleteBookmarkButton.addEventListener("click", () => {
  const selectedRadio = document.querySelector(
    'input[name="bookmark"]:checked'
  );

  if (!selectedRadio) {
    alert("Please select a bookmark to delete.");
    return;
  }
  const bookmarkToDelete = selectedRadio.value;
  const selectedCategory = categoryDropdown.value;
  const bookmarks = getBookmarks();

  const updatedBookmarks = bookmarks.filter(
    (b) => b.name !== bookmarkToDelete || b.category !== selectedCategory
  );

  localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

  categoryList.innerHTML = "";

  const matches = updatedBookmarks.filter(
    (b) => b.category === selectedCategory
  );

  if (matches.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    matches.forEach((match) => {
      const radioId = match.name;
      categoryList.innerHTML += `<input id="${radioId}" type="radio" value="${radioId}" name="bookmark">
    <label for="${radioId}"><a href="${match.url}" name="${match.name}">${match.name}</a>
    </label>`;
    });
  }
});
