function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a/b;
}

function inc(n) {
  return n += 1 ; // return n + 1 also worked so did ++n but not n++
}

function dec(n) {
  return n -= 1;
}

function makeInt(n) {
  return parseInt(n, 10); //return parseInt(n) took care of half of error but is also used in this function.
}

function preserveDecimal(n) {
  return parseFloat(n);
}

