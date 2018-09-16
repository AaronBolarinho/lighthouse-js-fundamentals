var repeatNumbers = function(data) {
  var string = "";
  for ( var x = 0; x < data.length; x++){
    var a = data[x][0];
    var b = data[x][1];
    for(var i = b; i > 0; i--){
      string += a;
      if (i ===1 && x < data.length - 1) {
        string += ', ';
      }
    }
  }
  return string;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


/* someone elses solution - works perfectly
var repeatNumbers = function(data) {
  var string = [];
  for (var x = 0; x < data.length; x++) {
    var number = data[x][0];
    var amountRepeated = data[x][1];
      for (var i = amountRepeated; i > 0;i--) {
        string += number;
         if (i == 1 && x < data.length - 1) {
         string += ", ";
         }
      }
  }
return string;
};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
*/
//someone elses solution - works perfectly


/*
var repeatNumbers = function(data) {
  var arrayOutput = [];
    for (var i = 0; i < data.length; i++){
  arrayOutput.push(data[0]);
  }
return arrayOutput;
};
*/

/*

var repeatNumbers = function(data) {

  var pets1 = new Array (data[0]);
  var array1 = pets1[0]
  var arrayOutput = []


  for (var i = 0; i < array1[1]; i++){
  arrayOutput.push(array1[0]);
  }


};

console.log(repeatNumbers([[1, 10]]));
//console.log(repeatNumbers([[1, 2], [2, 3]]));
//console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
*/

/*
var repeatNumbers = function(data) {

  var data1 = new Array (data[0]);
  var array1 = data1[0]
  var newArray = array1[0]
  var newArray1 = newArray.toString()
  var x = array1[1]

  var data2 = new Array (data[1]);
  var array2 = data2[0]
  var newArray2 = array2[0]
  var newArray3 = newArray2.toString()
  var xy = array2[1]


  var data3 = new Array (data[2]);
  var array3 = data3[0]
  var newArray3 = array3[0]
  var newArray4 = newArray3.toString()
  var xyz = array3[1]


  return newArray1.repeat(x)
  //return newArray1.repeat(x) + ', ' + newArray3.repeat(xy) + ', ' + newArray4.repeat(xyz)

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
*/
/*
1111111111
11, 222
10101010, 343434343434, 9292
*/



//THE BELOW IS WORKING
/*

var repeatNumbers = function(data) {

  var pets1 = new Array (data[0]);
  var array1 = pets1[0]

  for ( i = 0; i < array1.length; i++) {
  return array1[0];
  }

};

console.log(repeatNumbers([[1, 2], [2, 3]]));
*/
//THE ABOVE IS WORKING

//THE BELOW IS WORKING

/*
var repeatNumbers = function(data) {

  //var args1 = data[0];
  //var args2 = data[1];
  //var newArray = [Array(args2).fill(args1)];
  var pets1 = new Array (data[0]);
  var array1 = pets1[0]

  */

  /*pets[0] = new Array ( "Sheba", 13, "cat" );
  pets[1] = new Array ( "Jasper", 12, "dog" );
  pets[2] = new Array (args1);
  */
/*
  for (i = 0; i < array1.length; i++) {
  return array1[0];
}

  //return pets1[0][1]

};

console.log(repeatNumbers([[1, 2], [2, 3]]));

*/
//THE ABOVE IS WORKING



/*var repeatNumbers = function(data) {
  //var testArray = newArray.join('');
  var args1 = data[0];
  var args2 = data[1];
  var newArray = [Array(args2).fill(args1)];

  return newArray

};

console.log(repeatNumbers([1, 10]));
*/
/*
current thoughts - having trouble with the second variable; but this is not the same as the concatenate assigmnet because this is an array of arrays.

var repeatNumbers = function(data) {

  var args1 = data[0];
  var args2 = data[1];
  var newArray = [Array(args2).fill(args1)];

  return newArray.join('');

};
/*
//console.log(repeatNumbers([1, 10]));
console.log(repeatNumbers([1, 2]));

/*
//This is itterating through an array
var ingredients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var repeatNumbers = function(data) {
  for (i = 0; i < ingredients.length; i++) {
    return ingredients[i];
  //var args1 = data[0];
  //var args2 = data[1];
  //var newArray = [Array(args2).fill(args1)]
  //var newArrayLength = newArray.length;
}

};
*/


 /*
for (i = 0; i >= 10; i++) {
  return args1
};
*/
//return args2

//Array(5).fill(2)
//=> [2, 2, 2, 2, 2]


//console.log(repeatNumbers([2, 10]));
//console.log(repeatNumbers([[1, 2], [2, 3]]));
//console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/* this is working and returning 20
var repeatNumbers = function(data) {


var args1 = data[0]
var args2 = data[1]
var args3 = (args1 * args2)
  //return args2*args1
  return args3
};
*/
/*
var ingredients = [1, 2, 3, 4, 5, 6];


for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

*/


/*
for (i = 0; i <= 1; i++) {
  return(arrayTwo[i]);
}
//return arrayOne[0];
};
*/
//curent notes; you want the for loop to repeat the array by the value of the second element of the array!!

//console.log(repeatNumbers([2, 10]));
//console.log(repeatNumbers([[1, 2], [2, 3]]));
//console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

//1111111111
//11, 222
//10101010, 343434343434, 9292
/*
function concat(arrayOne, arrayTwo) {
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

function lastIndexOf(myArray, n) {
  return (myArray.lastIndexOf(n));
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
*/