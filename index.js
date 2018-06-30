function add(a, b) {
  return a += b
}

function subtract(a, b) {
  return a -= b
}

function multiply(a, b) {
  return a *= b
}

function divide(a, b) {
  return a /= b
}

function inc(n) {
  var a = n;
  return a += 1
}

function dec(n) {
  var a = n;
  return a -= 1
}

function makeInt(n) {
  var a = n;
  return parseInt(a, 10)
}

function preserveDecimal(n) {
  var a = n;
  return parseFloat(a)
}