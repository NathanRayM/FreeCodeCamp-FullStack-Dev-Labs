// build-an-inventory-management-program

let inventory = [];
//step 1

function findProductIndex(name) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
      return i;
    }
  }
  return -1;
}
console.log(findProductIndex("flour"));
console.log(findProductIndex("floUr"));

//Step2

function addProduct(product) {
  let index = findProductIndex(product.name);

  if (index === -1) {
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity,
    });
    console.log(product.name.toLowerCase() + " added to inventory");
  } else {
    inventory[index].quantity += product.quantity;
    console.log(inventory[index].name + " quantity updated");
  }
}
addProduct({ name: "flour", quantity: 5 });

//Step 3

function removeProduct(productName, quantity) {
  let index = findProductIndex(productName);

  if (index === -1) {
    console.log(productName.toLowerCase() + " not found");
    return;
  }

  if (inventory[index].quantity < quantity) {
    console.log(
      "Not enough " +
        inventory[index].name +
        " available, remaining pieces: " +
        inventory[index].quantity
    );
    return;
  }

  inventory[index].quantity -= quantity;

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  } else {
    console.log(
      "Remaining " +
        inventory[index].name +
        " pieces: " +
        inventory[index].quantity
    );
  }
}


