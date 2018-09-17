
/*
var calculateChange = function(total, cash) {

  var change = cash - total
  var changeTypes = {twenty: 0, ten:0, five: 0, twoDollars: 0, oneDollar: 0, Quarter: 0, Dime: 0, Nickel: 0, Penny: 0};

  if (change - 2000 > 0) {
    a = Math.floor(change / 2000)
    changeTypes.twenty = a
    change -= a * 2000
  } if (change !== 0 && change - 1000 > 0) {
    a = Math.floor(change / 1000)
    changeTypes.ten = a
    change -= a * 1000
  } if (change !== 0 && change - 500 > 0) {
    a = Math.floor(change / 500)
    changeTypes.five = a
    change -= a * 500
  } if (change !== 0 && change - 200 > 0) {
    a = Math.floor(change / 200)
    changeTypes.twoDollars = a
    change -= a * 200
  } if (change !== 0 && change - 100 > 0) {
    a = Math.floor(change / 100)
    changeTypes.oneDollar = a
    change -= a * 100
  } if (change !== 0 && change - 25 > 0) {
    a = Math.floor(change / 25)
    changeTypes.Quarter = a
    change -= a * 25
  } if (change !== 0 && change - 10 > 0) {
    a = Math.floor(change / 10)
    changeTypes.Dime = a
    change -= a * 10
  } if (change !== 0 && change - 5 > 0) {
    a = Math.floor(change / 5)
    changeTypes.Nickel = a
    change -= a * 5
  } if (change !== 0 && change - 1 >= 0) {
    a = Math.floor(change / 1)
    changeTypes.Penny = a
    change -= a * 1
  }

  if (changeTypes.twenty === 0) {
    delete changeTypes.twenty;
  } if (changeTypes.ten === 0) {
    delete changeTypes.ten;
  } if (changeTypes.five === 0) {
    delete changeTypes.five;
  } if (changeTypes.twoDollars === 0) {
    delete changeTypes.twoDollars;
  } if (changeTypes.oneDollar === 0) {
    delete changeTypes.oneDollar;
  } if (changeTypes.Quarter === 0) {
    delete changeTypes.Quarter;
  } if (changeTypes.Dime === 0) {
    delete changeTypes.Dime;
  } if (changeTypes.Nickel === 0) {
    delete changeTypes.Nickel;
  } if (changeTypes.Penny === 0) {
    delete changeTypes.Penny;
  }

 return changeTypes
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

*/

/* Someone elses different solution
var calculateChange = function(total, cash) {
  var change = cash - total
  var outputChange = ""
  var tenChange = "ten: "
  var com = ", "
  var changeArray = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  var changeText = ["twenty: ", "ten: ", "five: ", "twoDollar: ",
  "dollar: ", "quarter: ", "dime: ", "nickel: ", "penny: "]

for(i = 0; i <= changeArray.length; i++) {
  if(change - changeArray[i] > 0) {
    outputChange += changeText[i] += Math.floor(change / changeArray[i]);
    if(i <= changeArray.length - 2) {
      outputChange += com;
    }
    change -= (Math.floor(change / changeArray[i]) * changeArray[i]);
  }
}

return outputChange;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

Change line 3 to
var outputChange = {}
Change line 7 to
var changeText = ['twenty', 'ten', 'five', "twoDollar",'dollar', 'quarter', 'dime', 'nickel', 'penny']
Change line 12 to
outputChange[`${changeText[i]}`] = Math.floor(change / changeArray[i]);
Remove comma string logic where needed.
Verify that function still works.

That should be it.

*/


/*
{ twoDollar: 1, dime: 1, penny: 3 }
{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/
/*
var score = {visitors: 0, home: 0};
// This is okay

score.visitors = 1;

if (score.visitors === 0) {
  delete score.visitors;
} else if (score.home === 0) {
  delete score.home;
}


console.log(score);
*/

/*
var calculateChange = function(total, cash) {
  // Your code here
  var changeTypes = ['twentyDollars', 'tenDollars', 'fiveDollars', 'twoDollars', 'oneDollar', 'Quarter', 'Dime', 'Nickel', 'Penny'];
  var newObject = {};

  totalChange = cash - total;

     for (var i = 0; i < changeTypes.length; i++) {

      newObject = {changeTypes};
      return newObject
      }

    }
*/
/*
var changeTypes = ['twentyDollars', 'tenDollars', 'fiveDollars', 'twoDollars', 'oneDollar', 'Quarter', 'Dime', 'Nickel', 'Penny'];

changeTypes.reduce(function(obj, v) {}, {})
*/
/*
a = ['USD', 'EUR', 'INR'];

console.log(
  a.reduce(function(obj) {

    return obj;
  }, {})
)
*/

//console.log(calculateChange(1787, 2000));


/*
var calculateChange = function(total, cash) {
  // Your code here
  var changeTypes = ['twentyDollars', 'tenDollars', 'fiveDollars', 'twoDollars', 'oneDollar', 'Quarter', 'Dime', 'Nickel', 'Penny']
  var newObject = {}

  totalChange = cash - total;

    console.log(
    changeTypes.reduce(function(obj, v) {
      for (var i = 0; i < changeTypes.length; i++) {
      obj[changeTypes[i]] = 1;
      return obj;
      }
    }, {})

  )
};

console.log(calculateChange(1787, 2000));
*/

/*
 var Twenty dollars =[]
  var Ten dollars = []
  var Five dollars = []
  var Two dollars = []
  var One dollar = []
  var Quarter = []
  var Dime = []
  var Nickel = []
  var Penny = []
*/

/*
a = ['USD', 'EUR', 'INR'];

console.log(
  a.reduce(function(obj, v) {
    obj[v] = 1;
    return obj;
  }, {})
)
*/

/*
  //var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2};

  function toObject(arr) {

  var TwentyDollars = 1
  var TendDollars = 2
  var FiveDollars = 5
  var arr = [TwentyDollars, TendDollars, FiveDollars]

  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    if (arr[i] !== undefined) rv[i] = arr[i];
  return rv;
}
  console.log(toObject());
  */



/*
  //var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2};

  function toObject(arr) {

  var TwentyDollars = 1
  var TendDollars = 2
  var FiveDollars = 5
  var arr = [TwentyDollars, TendDollars, FiveDollars]

  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    if (arr[i] !== undefined) rv[i] = arr[i];
  return rv;
}
  console.log(toObject());
  */
//  return rv;
//


/*
var calculateChange = function(total, cash) {
  // Your code here
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    if (arr[i] !== undefined) rv[i] = arr[i];
  return rv;
}
*/
/*
You'll be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Your function calculateChange should return an object which describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

N.B. Although pennies are not used in circulation, still calculate the amount of pennies to give back.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)

{ twoDollar: 1, dime: 1, penny: 3 }
{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

*/