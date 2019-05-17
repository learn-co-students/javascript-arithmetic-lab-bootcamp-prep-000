function add(a, b) {
  return (a + b)
}

function subtract(b, a) {
  return (b - a)
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}


function inc(n) {
  var add1 = (n += 1)
  return add1
}

function dec(n) {
  var remv1 = (n -= 1)
  return remv1
}

function makeInt(n) {
  var parse = parseFloat(n)
  return parse
}

function preserveDecimal(n) {
  return parseFloat(n)
}
