//build-a-lunch-picker-program

let lunches = [];

function addLunchToEnd(lunches, item) {
  lunches.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return lunches;
}

console.log(addLunchToEnd(lunches, "Pizza"));
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

function addLunchToStart(lunches, item) {
  lunches.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return lunches;
}

console.log(addLunchToStart(lunches, "Sushi"));
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let lunchItem = lunches.pop();
    console.log(`${lunchItem} removed from the end of the lunch menu.`);
  }
  return lunches;
}

console.log(removeLastLunch(["Stew", "Soup", "Toast"]));
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));

function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let lunchitem = lunches.shift();
    console.log(`${lunchitem} removed from the start of the lunch menu.`);
  }
  return lunches;
}

console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));

function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches available.");
  } else {
    let randomIndex = Math.floor(Math.random() * lunches.length);
    let lunchitem = lunches[randomIndex];
    console.log(`Randomly selected lunch: ${lunchitem}`);
  }
  return lunches;
}

function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${lunches.join(", ")}`);
  }
  return lunches;
}

console.log(showLunchMenu(["Greens", "Corns", "Beans"]));
console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));

/*
EXPECTED OUTPUT

Pizza added to the end of the lunch menu.
[ 'Pizza' ]
Burger added to the end of the lunch menu.
[ 'Pizza', 'Tacos', 'Burger' ]
Sushi added to the start of the lunch menu.
[ 'Sushi', 'Pizza' ]
Pizza added to the start of the lunch menu.
[ 'Pizza', 'Burger', 'Sushi' ]
Toast removed from the end of the lunch menu.
[ 'Stew', 'Soup' ]
Noodles removed from the end of the lunch menu.
[ 'Sushi', 'Pizza' ]
Salad removed from the start of the lunch menu.
[ 'Eggs', 'Cheese' ]
Sushi removed from the start of the lunch menu.
[ 'Pizza', 'Burger' ]
Menu items: Greens, Corns, Beans
[ 'Greens', 'Corns', 'Beans' ]
Menu items: Pizza, Burger, Fries, Salad
[ 'Pizza', 'Burger', 'Fries', 'Salad' ]
 
*/
