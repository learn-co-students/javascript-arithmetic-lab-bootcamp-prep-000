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


//parse string, return whole integer; 2 args: 'n' and base(usu. 10)
function makeInt(n) {
  return parseInt(n, 10);
}

//parse string, return 'floating-point' num = preserve decimals/ only need 1 argument!
function preserveDecimal(n) {
  return parseFloat(n);
}
