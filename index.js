function add(a,b) {
  var result= a + b;
  return result;
}

function subtract(a, b) {
  var result = a - b;
  return result;
}

function multiply(a, b) {
  var result = a * b;
  return result;
}

function divide(a, b) {
  var result = a/b;
  return result;
}


function inc(n) {
  n += 1;
  return n;
 }

 function dec(n) {
  n -= 1;
  return n;
}

function makeInt(n) {
  parseInt(n);
  return n;
}

var number;
function makeInt(n) {
  number = parseInt(n, 10);
  return number;
}

//preserveDecimal(n)


function preserveDecimal(n) {
  var number;
  var nonnumber;
  number = parseFloat(n);
  nonumber = parseFloat('nonumber')
  return number, nonumber;
}
