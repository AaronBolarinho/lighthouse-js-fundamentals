function loopyLighthouse(range, multiples, words)  {
  for (var i = range[0]; i <= range[1]; i++) {

    if (i % (multiples[0] * multiples[1]) === 0) {
      console.log(words[0] + words[1]);

    } else  if (i % multiples[0] === 0) {
      console.log(words[0]);

    } else if (i % multiples[1] === 0) {
      console.log(words[1]);

    } else {
      console.log(i)
    }
  }
}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

//The above is the correct solution! yay!

/*

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

console.log(repeatNumbers([[1, 2], [2, 3]]));

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

*/

//Instructions:
//Your loopyLighthouse function should log to the console all the numbers from 15 to 90,
//except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".


//this is what I am passing
//loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

/* This is the original loopLighthouseCode
var i = 100

while (i < 201) {
if (i % 12 === 0) {
    console.log("LoopyLighthouse")
    i++;
  } else  if (i % 3 === 0) {
    console.log("Loopy");
    i++;
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
    i++;
  } else {
    console.log(i)
    i++
  }
}
*/