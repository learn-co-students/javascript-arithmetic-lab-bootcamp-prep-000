function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b){
  return a / b
}

function inc(n) {
  return ++n
}

function dec(n) {
  return --n
}

function makeInt(n) {
  if (n === "n") {
    return parseInt(n)
  }
  else {
    return parseInt(n, 10)
  }
}

function preserveDecimal(n) {
  if (n === 'n') {
    return parseFloat('n')
  }
  else {
    return parseFloat(n)
  }
}
