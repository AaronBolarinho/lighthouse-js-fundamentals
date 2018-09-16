
var conditionalSum = function(values, condition) {
  var result = 0;
  for (i = 0; i < values.length; i++) {
    if (condition == "even" && values[i] % 2 === 0) {
      result += values[i];
    }
    else if (condition === "odd" && values[i] %2 != 0) {
      result += values[i];
    }
  }
  return result
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));


/* This is a working soltion.
var conditionalSum = function(values, condition) {
  var result = 0;
  for (i = 0; i < values.length; i++) {
    if (condition == "even" && values[i] % 2 === 0) {
      result += values[i];
    }
    else if (condition === "odd" && values[i] %2 != 0) {
      result += values[i];
    }
  }
  return result
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
*/
/*
var conditionalSum = function(values, condition) {
  var sum = 0;
  for (i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
        sum += values[i];
    }
    else if (condition === "odd" && values [i] %2 != 0) {
        sum += values[i];
    }
  }
  return sum;
};
*/

/*
//console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
//console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
//console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
//console.log(conditionalSum([], "odd"));

6
9
144
0

array = [ 1, 2, 3, 4, 5, 6 ];
for (index = 0; index < array.length; index++) {
    console.log(array[index]);
}


var sum = [1, 2, 3].reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum); // 6
*/