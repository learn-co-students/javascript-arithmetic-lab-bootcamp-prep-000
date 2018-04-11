var a, b

a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)

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

function makeInt(a) {
  var n = parseInt(a, 10);
  if (isNaN(n))
    return a;
  return n;
}

function preserveDecimal(a) {
  var n = parseFloat(a)
  if (isNaN(n))
    return a;
  return n;
}
