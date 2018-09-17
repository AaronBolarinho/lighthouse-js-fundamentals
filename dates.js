
var talkingCalendar = function(date) {
  var date = new Date(date),
  locale = "en-us",
  month = date.toLocaleString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
  return month
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*

var date = new Date("10/11/2009"),
    locale = "en-us",
    month = date.toLocaleString(locale, { month: "long" });
*/

/*
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

console.log(today.toLocaleDateString("en-US")); // 9/17/2016
console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016
*/

/* This is working; not sutie correct
var talkingCalendar = function(date) {
  var parts =date.split('/');
// Please pay attention to the month (parts[1]); JavaScript counts months from 0:
// January - 0, February - 1, etc.
var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
return (mydate.toDateString());
};



console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
*/

/* The Output
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/

