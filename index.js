function add(a, b) {
  var c = (parseInt(a, 10) + parseInt(b, 10))
  return c
}

function subtract(a, b) {
  var c = (parseInt(a, 10) - parseInt(b, 10))
  return c
}

function multiply(a, b) {
  var c = (parseInt(a, 10) * parseInt(b, 10))
  return c
}

function divide(a, b) {
  var c = (parseInt(a, 10) / parseInt(b, 10))
  return c
}

function inc(a) {
  return ++a
}

function dec(a) {
  return --a
}

function makeInt(a) {
  return parseInt(a, 10)
}

function preserveDecimal (a) {
  return parseFloat(a)
}