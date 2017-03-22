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

function inc(n) {
  return n += 1
}

function dec(n) {
  return n -= 1
}

function makeInt(n) {
  if parseInt(n, 10) {
    return parseInt(n, 10)
  }
}

function makeInt() {
  return parseInt('nonsense', 10)
}

function preserveDecimal() {
  return parseFloat('2.222', 10) 
}

function preserveDecimal() {
  return parseFloat('nonsense', 10)
}