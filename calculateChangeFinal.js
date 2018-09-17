
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

