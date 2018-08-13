function add(a, b) {
 var add = a + b;
  return(add);
}

function subtract(a, b) {
  var subtract = a - b;
  return(subtract);
}

function multiply(a, b) {
  var multiply = a * b;
  return(multiply)
}

function divide(a, b) {
  var divide = a/b;
  return(divide);
}

function inc(n) {
  var inc = n += 1;
  return(inc)
}

function dec(n) {
  var dec = n -= 1;
  return(dec)
}

function makeInt(n) {
  var makeInt = parseInt(n, 10);
  return(makeInt);
}

function preserveDecimal(n) {
  var preserveDecimal = parseFloat(n);
  return(preserveDecimal);
}