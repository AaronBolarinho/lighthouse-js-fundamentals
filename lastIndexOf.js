//working

/*
var lastIndexOf = [ 0, 1, 4, 1, 2 ];

for (i = 0; i < lastIndexOf.length; i++) {
  console.log(lastIndexOf[i]);
}
*/

// not working
/*
var array = [ 0, 1, 4, 1, 2 ];

function lastIndexOf([array]) {

//var array = [ 0, 1, 4, 1, 2 ];

for (i = 0; i < lastIndexOf.length; i++) {
  console.log(lastIndexOf[i]);
}
}
*/

//working in progress

/*
var lastIndexOf = [0, 1, 4, 1, 2];
var number = 1

for (i = (lastIndexOf.length - 1); i >= 0; i--) {
  //if(number === i) {
    console.log(lastIndexOf.length);
    //}
  }
*/


/*
function howManyHundreds(x) {

  return Math.floor(x / 100);

}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
*/
/*
function printEntries(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    console.log(arr[i]);
  }
  console.log('=== printed ===');
}
*/

//working so far

/*
var myArray = [ 0, 1, 4, 1, 2 ];
var n = 1

console.log(myArray.lastIndexOf(n));
*/

//working so far

/*
var myArray = [ 0, 1, 4, 1, 2 ];
var n = 1

function myFunction(x) {

  return (myArray.lastIndexOf(n));

}

console.log(myFunction(1));

*/


//var myArray = [ 0, 1, 4, 1, 2 ];

/*holy shit almost there

function lastIndexOf([a, b, c, d, e], n) {
  var myArray = [a, b, c, d, e];
  return (myArray.lastIndexOf(n));

}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

*/

function lastIndexOf([a, b, c, d, e], n) {
  var myArray = [a, b, c, d, e];
  return (myArray.lastIndexOf(n));

}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
