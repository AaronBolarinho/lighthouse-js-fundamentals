function range(start, end, step) {
  var ans = [];
  for (start; start <= end; start += step) {
    if(step >= 0) {
      ans.push(start);
    } else {
      return ans;
    }
  }
  return ans;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
