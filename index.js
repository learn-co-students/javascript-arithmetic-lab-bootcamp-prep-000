

var number;
function add(a, b){ //add a and b and return the result.
  number = a + b;
  return number;
}
function subtract(a, b){ //subtract a and b and return the result.
  number = a - b;
  return number;
}
function multiply(a, b){ //multiply a and b and return the result.
  number = a * b;
  return number;
}
function divide(a, b){ //divide a and b and return the result.
  number = a / b;
  return number;
}
function inc(a){ //Increment a by 1 and return the result.
  number = a + 1;
  return number;
}
function dec(a){ //Decrement a by 1 and return the result.
  number = a - 1;
  return number;
}
function makeInt(a){ //Parse a as an integer and return that integer.
  number = parseInt(a, 10);
  return number;
}

function preserveDecimal(n) {
  number = parseFloat(n)
  return number;
}




// var number;
// function add(a, b) {
//   return a + b
// }
//
// function subtract(a,b) {
//   return a - b
// }
//
// function multiply(a, b) {
//   return a * b
// }
//
// function divide(a,b) {
//   return a / b
// }
//
// function inc(n) {
//   return n++
// }
//
// function dec(n) {
//   return n--
// }
//
// function makeInt(n) {
//   number = parseInt(n, 10)
//   return number;
// }
