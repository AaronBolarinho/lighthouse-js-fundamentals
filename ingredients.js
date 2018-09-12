var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var i = 0

while (i < 8) {
  console.log(ingredients[i])
  i++
}

// Write a for loop that prints out the contents of ingredients:

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

var j = 7

for (j = 7; j >= 0; --j) {
  console.log(ingredients[j]);
}
