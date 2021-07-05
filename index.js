function add(a,b) {
  return a + b
}

function subtract(a,b) {
  return a - b
}

function multiply(a,b) {
  return a*b
}

function divide(a,b) {
  return a/b
}

function inc(n) {
  var n
  n++
  return n
}

function dec(n) {
  var n
  n--
  return n
}

function makeInt(n) {
  var n
  var base = 10
  var newN = parseInt(n, base)
  return newN
}

function preserveDecimal(n) {
  var n
  var newN = parseFloat(n)
  return newN
}
