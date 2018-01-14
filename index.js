function add(a, b) {
  return a += b;
}

function subtract(a, b){
  return a -= b;
}

function multiply(a, b){
  return a *= b;
}

function divide(a, b){
  return a /= b;
}

function inc(n) {
  n == n++;
  return n;
}

function dec(n){
  n == n--;
  return n;
}


function makeInt(n, base) {
  var parsed = parseInt(n, 10);
  return parsed;
}

function preserveDecimal(n) {
  var parsed = parseFloat(n);
  return parsed;
}

