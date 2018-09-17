// 1. Create an empty array, `names`
// 2. Find all the paragraph elements using `getElementsByClassName`
// 3. For each element found
  // Add the element's text to the array of names
// 4. Alert the final result

var names = [];
var elm = document.getElementsByClassName('name');
for (var i = 0; i < elm.length; i++) {
names.push(elm[i].innerText);
}
alert(names);