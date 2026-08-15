# Build a Product Showcase

**Description:**
In this lab, I built a product showcase application using TypeScript that manages and displays multiple types of products, including books, electronics, and clothing. The application uses TypeScript types and generics to define and manage product data while dynamically rendering product information to the page.

The project includes a generic Collection<T> class for storing, retrieving, and filtering product data. Products are rendered based on their specific type, with TypeScript narrowing used to access properties unique to each product category. Users can filter the displayed products by category, and the application dynamically updates the DOM with the appropriate product cards.

The goal of this exercise was to practice working with TypeScript generics, product data models, discriminated unions, type narrowing, callback functions, array methods, error handling, and DOM manipulation while maintaining strong type safety throughout the application.

**Technologies Used:**

- HTML5
- CSS3
- TypeScript
- TypeScript Generics
- DOM Manipulation
- Object-Oriented Programming (Classes)
- Array Methods (filter(), map(), join())

**File Structure:**

```
build-a-product-showcase/
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

- Defining multiple product types using TypeScript
- Working with discriminated unions and type narrowing
- Creating reusable generic classes with Collection<T>
- Understanding the relationship between generic T[] and concrete types such as Product[]
- Typing callback functions in generic class methods
- Filtering collections using callback functions and filter()
- Transforming product data into HTML using map()
- Combining arrays of rendered HTML strings using join()
- Rendering different HTML based on a product’s type
- Working with optional properties for different product categories
- Throwing errors when invalid product types are encountered
- Passing typed arrays between functions
- Updating the DOM dynamically using innerHTML
- Compiling TypeScript into JavaScript using the TypeScript compiler (tsc)
- Organizing application logic into reusable functions and class methods
