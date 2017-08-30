function add(a ,b) {
  return a + b
}

function subtract(a,b) {
  return a - b
}

function multiply(a,b) {
  return a * b
}

function divide(a,b) {
  return a / b
}

function inc(n) {
  return n += 1
}

function dec(n) {
  return n-= 1
}

function makeInt(n, base) {
if (isNaN(n) === true) {
  return NaN;
}
else if (0 <= n <= 999 ){
  return parseInt(n);
}
else {
  return 0
}
}








function preserveDecimal(n) {
  return parseFloat(n)
}
