function merge(arrayOne, arrayTwo) {
  var arrayThree = arrayTwo.concat(arrayOne);

  return arrayThree.sort(function(a, b){ return a - b });
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

//This solution worked; this was the one I submitted.

//Define a function merge, which, given two sorted arrays containing numbers,
//returns a sorted array of the numbers from both lists.

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

*/