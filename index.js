function add(a, b) {
  var c = a + b
  return c
}

function subtract(a, b) {
  var c = a - b
  return c
}

function multiply(a, b) {
  var c = a * b
  return c
}

function divide(a, b) {
  var c = a / b
  return c
}

function inc(n) {
  ++n
  return n
}

function dec(n) {
  --n
  return n
}

function makeInt(n) {
  var result = parseInt(`${n}`, 10)
  return result
}

function preserveDecimal(n) {
  var result = parseFloat(`${n}`)
  return result
}
