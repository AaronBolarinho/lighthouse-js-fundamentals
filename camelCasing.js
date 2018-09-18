//This is the final solution to this problem! Woooo! Hard work!
var camelCase = function(string) {

  string = string.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join('');

  return string[0].toLowerCase() + string.slice(1);

}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/*
var camelCase = function(string) {

  text = string
  text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join('');

  return text[0].toLowerCase() + text.slice(1);

}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
/*

/*
var camelCase = function(string) {

  text = string
  text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join('');

  newString = text

  return newString[0].toLowerCase() + newString.slice(1);

}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
*/


/* This is working almost perfectly
var camelCase = function(string) {
  text = string
text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join('');


return(text);
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
*/
/*
var camelCase = function(string) {
  var str = string;
  var res = str.split(" ");
  var myArray = new Array ( );

  for (var x = 0; x < 4; x++) {

  myArray[x] = new Array (res[x])

    //myArray[0][0][0].toUpperCase();
    //newString.push((res[x][0].toUpperCase()) + res[x]);
    //res.splice(res[x][0], res[x], res[x][0].toUpperCase() + res[x]);
    //console.log(myArray[0][1][0]);
    }


  //return newString

  console.log(myArray[0][0][0]);
};

console.log(camelCase("this is a string"));
*/
//var text = "foo bar loo zoo moo";

/*
var camelCase = function(string) {
  text = string
text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join('');


return(text);
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
*/

/*
var pets = new Array ( );
pets[0] = new Array ( "Sheba", 13, "cat" );
pets[1] = new Array ( "Jasper", 12, "dog" );
alert ( pets[0][0] + " is a " + pets[0][1] + " year old " + pets[0][2] ); // Displays "Sheba is a 13 year old cat"
alert ( pets[1][0] + " is a " + pets[1][1] + " year old " + pets[1][2] ); // Displays "Jasper is a 12 year old dog"
*/



/*

var myArray = "The quick brown fox jumped over the lazy dog."
var newArray = myArray.split(" ")

for (var x = 0; x < myArray.length; x++){

     //newArray.concat(myArray[x])
     //console.log([myArray[x]])


    }

console.log(newArray);
*/
/*
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
At position 2, add the new items, and remove 1 item:
*/
/*
var camelCase = function(string) {
  var str = string;
  var res = str.split(" ");
  var newString = [res[0],]

  for (var x = 1; x < 4; x++){

     //console.log(res[x][0].toUpperCase());
    newString.push((res[x][0].toUpperCase()) + res[x]);

    }

  return newString
};

console.log(camelCase("this is a string"));
*/

/*
String a = "Cool";
a = a.replace("o","");
*/
//variable 'a' contains the string "Cl"

//var p = 'The quick brown fox jumped over the lazy dog. If the dog reacted, was it really lazy?';

//var regex = /res[x][0]/gi;

//console.log(res[x][0].replace(regex, res[x][0].toUpperCase()));

// expected output: "The quick brown fox jumped over the lazy ferret. If the ferret reacted, was it really lazy?"


/* This is working, almost there
var camelCase = function(string) {
  var str = string;
  var res = str.split(" ");

  for (var x = 1; x < res.length; x++){

     console.log(res[x][0].toUpperCase());
    }

  //return res;
};

console.log(camelCase("this is a string"));
*/
//var res = str.toUpperCase();

/*
// 0 - index to replace, 'f' - replacement string
'dog'.replace(/./g, (c, i) => i == 0? 'f': c)
// "fog"
var x = 'we have a dorrest'.replace(/./g, (c, i) => i == 10? 'F': c)

var str = "How are you doing today?";
var res = str.split(" ");

console.log(res);
*/
/*
var camelCase = function(input) {
  // Your code here
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/