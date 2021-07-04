function add(a,b) {
  return a += b
}

function subtract(a,b) {
  return a -= b
}

function multiply(a, b) {
  return a *= b
}

function divide(a,b) {
  return a /= b
}

function inc(n) {
  n += 1
  return n
}

function dec(n) {
  n -= 1
  return n
}

function makeInt(n) {
  var int = parseInt(n, 10)
  if (isNaN(int)) {
    return "appropriate"
  }
  return int
}

function preserveDecimal(n) {
  var newNumber = parseFloat(n)
  if (isNaN(newNumber)) {
    return "appropriate"
  }
  return newNumber
}
  
