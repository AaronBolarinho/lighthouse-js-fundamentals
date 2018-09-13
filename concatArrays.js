
/*var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);

console.log(children);
*/

//This is almost working; same logic as solution to lastIndexOf.js

/* no working
function concat([a, b, c], [d, e, f]) {
  var arrayOne = [a, b, c];
  var arrayTwo = [d, e, f];
  var arrayThree = arrayOne.concat(arrayTwo);
  for (i = 0, i < arrayThree.length, i++) {
    if (arrayThree[i] === undefined) {
      arrayThree.splice(arrayThree[i]);
    }
  }
  return arrayThree;
}
*/

/*
var array = [2, 5, 9];
console.log(array)
var index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}
// array = [2, 9]
console.log(array);
*/

//This is working; same logic as solution to lastIndexOf.js

function concat([a, b, c], [d, e, f]) {
  var arrayOne = [a, b, c];
  var arrayTwo = [d, e, f];
  var arrayThree = arrayOne.concat(arrayTwo);
  for(var i = arrayThree.length - 1; i >= 0; i--) {
    if(arrayThree[i] === undefined) {
       arrayThree.splice(i, 1);
    }
}
  return arrayThree;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);