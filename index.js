var a, b

function beforeEach() {
  var a = Math.floor(Math.random() * 1000)
  var b = Math.floor(Math.random() * 1000)
}

function add(a, b) {
  return (a + b)
}

function subtract(a, b) {
  return (a - b)
}

function multiply(a, b) {
  return (a * b)
}

function divide(a, b) {
  return (a / b)
}

function inc(a) {
  return (a + 1)
}

function dec(b) {
  return (b - 1)
}

function makeInt(a) {
  return parseFloat(a, 10)
}

function preserveDecimal(b) {
  return parseFloat(b, 10)
}
