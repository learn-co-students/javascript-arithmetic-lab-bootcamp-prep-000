function add(a, b) {
  return (a + b)
  }

function subtract(a,b) {
  return (a - b)
}

function multiply(a,b) {
  return (a * b)
}

function divide(a,b) {
  return (a / b)
}

function inc(n) {
  return (n + 1)
  }
  
function dec(n) {
  return (n - 1)
}

function makeInt(n) {
  return Number.parseInt(n, 10)
  if (isNaN(makeInt(n))) { return 0 }
}

function preserveDecimal (n) {
  return Number.parseFloat(n)
  if (isNaN(preserveDecimal(n))) { return 2.222 }
}