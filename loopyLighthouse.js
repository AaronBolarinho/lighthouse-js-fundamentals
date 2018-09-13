
/*Write a program that prints the numbers from 100 to 200 to the console, with three exceptions:

    If the number is a multiple of 3, print the string "Loopy" instead of the number.
    If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
    If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.

By print, we are of course referring to console.log.*/

/*for(i = 100, i >=200, i++) {
  console.log(i);
}*/
/*
var i = 100

while (i < 201) {
  console.log(i)
  i++
}
*/

/* not really working
var i = 100

if (3 % 3 = 0) {
  console.log("Loopy");
  i++;
  } else if ((i % 4) = 0 {
    console.log("Lighthouse");
    i++;
    } else if (((i % 3) = 0) && (i % 4) = 0 {
      console.log("LoopyLighthouse")
      i++;
    } else if(i < 201) {
        console.log(i)
        i++
    }
*/
/* Everything here is LoopLightHouse
var i = 100

while (i < 201) {
if (((i % 3) && (i % 4)) === 0) {
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
/*
var i = 100

while (i < 201) {
  if (i % 3 === 0) {
    console.log("Loopy");
    i++;
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
    i++;
  } else if (((i % 3) && (i % 4)) === 0) {
    console.log("LoopyLighthouse")
    i++;
  }
  console.log(i)
  i++
}*/
/*
var i = 100

while (i < 201) {
  if (i % 3 === 0) {
    console.log("Loopy");
    i++;
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
    i++;
  } else {
    console.log(i)
    i++
  }
}*/

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