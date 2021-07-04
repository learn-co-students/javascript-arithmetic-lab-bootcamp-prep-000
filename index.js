var add = (a, b) => {return a + b};
var subtract = (a, b) => {return a - b};
var multiply = (a, b) => {return a * b};
var divide = (a, b) => {return a / b};

var inc = (n) => {return ++n};
var dec = (n) => {return --n};

var makeInt = (n) => {
  if (parseInt(n) == NaN) {
    return "NaN"
  } else {
    return parseInt(n, 10)
  }
};

var preserveDecimal = (n) => {
 if (parseFloat(n) == NaN) {
   return "NaN"
 } else {
   return parseFloat(n)
 }
};


console.log(inc(1));
