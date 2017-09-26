function add(a, b) {
  return a += b
}

function substract(a, b) {
  return a -= b
}

function multiply(a, b) {
  return a *= b
}

function divide(a, b) {
  return a /= b
}

function inc(a) {
  return a ++
}

function dec(a) {
  return a --
}

function makeInt(n) {
  if (n === parseInt(n)) {
    return n
  }
  else if (n === parseInt(n, 10)) {
    return n
  }
  else if (isNaN(n)) {
    return true
  }
}

function preserveDecimal(n) {
  return parseFloat(n)
}