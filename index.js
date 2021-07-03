function add(a,b) {
  return parseFloat(a)+parseFloat(b)
}

function subtract(a,b) {
  return parseFloat(a)-parseFloat(b)
}

function multiply(a,b) {
  return parseFloat(a)*parseFloat(b)
}

function divide(a,b) {
  return parseFloat(a)/parseFloat(b)
}

function inc(a) {
  a = parseFloat(a) + 1
  return a
}

function dec(a) {
  a = parseFloat(a) - 1
  return a
}

function makeInt(a) {
  return parseInt(a,10)
}

function preserveDecimal(a) {
  return parseFloat(a)
}