function add(a, b) {
  return a + b;
} 

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
  return ++n;
}

function dec(n) {
  return --n;
}

function makeInt(n) {
 let int = parseInt(n, 10);
 return int.toString();
}

function preserveDecimal(n) {
let float = parseFloat(n);
return float;
}