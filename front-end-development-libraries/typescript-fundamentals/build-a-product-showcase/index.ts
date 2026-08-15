//Interfaces and item extentions

interface Item {
  type: "book" | "electronics" | "clothing";
  id: string;
  price: number;
}

interface Book extends Item {
  type: "book";
  title: string;
  author: string;
}

interface Electronics extends Item {
  type: "electronics";
  item: string;
  model: string;
  warranty?: number;
}

interface Clothing extends Item {
  type: "clothing";
  item: string;
  brand: string;
  size?: "S" | "M" | "L";
}

// category types
type Product = Book | Electronics | Clothing;

// class constructor and methods
class Collection<T> {
  items: T[];
  constructor(items: T[]) {
    this.items = items;
  }

  getAll() {
    return this.items;
  }

  filter(callback: (item: T) => boolean) {
    return this.items.filter((item: T) => callback(item));
  }
}

// products class object containing items
const products = new Collection<Product>([
  {
    type: "book",
    id: "b1",
    price: 13.99,
    title: "LOTR Fellowship of the Ring",
    author: "JRR Tolkien",
  },
  {
    type: "book",
    id: "b2",
    price: 12.99,
    title: "The Hobbit",
    author: "JRR Tolkien",
  },
  {
    type: "clothing",
    id: "c1",
    price: 34.59,
    item: "Hoodie",
    brand: "thisbrand",
    size: "S",
  },
  {
    type: "electronics",
    id: "e1",
    price: 57.32,
    item: "headphones",
    model: "T32",
    warranty: 2,
  },
  {
    type: "clothing",
    id: "c2",
    price: 45.34,
    item: "Sweater",
    brand: "thisbrand",
    size: "L",
  },
  {
    type: "electronics",
    id: "e2",
    price: 189.13,
    item: "Microphone",
    model: "3Ef2Q22",
    warranty: 0,
  },
]);

// function to render HTML with product data
function renderProduct(product: Product): string {
  if (product.type === "book") {
    return `<div class="item" id="${product.id}">
        <p><strong>Book:</strong> ${product.title} by ${product.author}</p>
        <p class="price">$${product.price}</p>
        </div>`;
  }

  if (product.type === "electronics") {
    return `<div class="item" id="${product.id}">
        <p><strong>Electronics:</strong> ${product.item} - ${product.model} ${
      product.warranty ? `- Warranty: ${product.warranty} year(s)` : ""
    } </p>
        <p class="price">$${product.price}</p>
        </div>`;
  }

  if (product.type === "clothing") {
    return `<div class="item" id="${product.id}">
        <p><strong>Clothing:</strong> ${product.item} by ${product.brand} ${
      product.size ? `- Size ${product.size}` : ""
    }</p>
        <p class="price">$${product.price}</p>
      </div>`;
  }
  throw new Error(`Unknown product type: ${JSON.stringify(product)}`);
}

//DOM elements
let output = document.querySelector<HTMLElement>("#output");
let allButton = document.querySelector<HTMLButtonElement>("#all");
let booksButton = document.querySelector<HTMLButtonElement>("#books");
let electronicsButton =
  document.querySelector<HTMLButtonElement>("#electronics");
let clothingButton = document.querySelector<HTMLButtonElement>("#clothing");

//Filtered product variables
let allProducts = products.getAll();
let allBooks = products.filter((product) => product.type === "book");
let allElectronics = products.filter(
  (product) => product.type === "electronics"
);
let allClothing = products.filter((product) => product.type === "clothing");

// function to show/render products as strings
function showProducts(productArr: Product[]) {
  if (output) {
    return (output.innerHTML = productArr
      .map((product) => renderProduct(product))
      .join(""));
  }
}

// button event listeners
if (allButton) {
  allButton.addEventListener("click", () => {
    showProducts(allProducts);
  });
}

if (booksButton) {
  booksButton.addEventListener("click", () => {
    showProducts(allBooks);
  });
}
if (electronicsButton) {
  electronicsButton.addEventListener("click", () => {
    showProducts(allElectronics);
  });
}
if (clothingButton) {
  clothingButton.addEventListener("click", () => {
    showProducts(allClothing);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showProducts(allProducts);
});
