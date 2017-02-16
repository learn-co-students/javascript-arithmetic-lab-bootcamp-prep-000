var a, b;
/*beforeEach (function() {
a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)
})*/


function add(a, b) {
  return a + b
//  return (add(a, b)).toEqual(a + b);
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}
 function divide(a, b) {
  return a / b
 }

function makeInt(n) {
  return parseInt(n, 10)
  }

function preserveDecimal(n) {
  return parseFloat(n)
}
