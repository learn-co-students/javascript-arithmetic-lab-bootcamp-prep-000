var a,b

function add(a, b) {
 return a + b
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

function inc(a) {
 return a + 1
}

function dec(a) {
  return a - 1
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}

add(1,2);
subtract(1,2);
multiply(1,2);
divide(1,2);
inc(1);
dec(1);
makeInt(1);
preserveDecimal('2.222');
