function add(a, b) {
  return parseFloat(a) + parseFloat(b)
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b)
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b)
}

function divide(a, b) {
  return parseFloat(a) / parseFloat(b)
}

function inc(a) {
  var b = parseInt(a)+1
  // apparently this expects an int, ok
  return b
}

function dec(a) {
  var b = parseInt(a)-1
  // apparently this expects an int, ok
  return b
}

function makeInt(a) {
  return parseInt(a, 10)
  // test insists on base 10
}

function preserveDecimal(a) {
  return parseFloat(a)
}
