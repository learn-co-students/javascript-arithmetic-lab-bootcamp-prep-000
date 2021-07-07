function add(a, b) {
  return a += b
}

function subtract(a, b) {
  return a -= b
}

function multiply(a, b) {
  return a *= b
}

function divide(a, b) {
  return a /= b
}

function inc(n) {
  n = n + 1 
  return n
}

function dec(n) {
  n = n - 1
  return n
}

function makeInt(n) {
  n = parseInt(n, 10)
  return n
}

makeInt('0x2328')
isNaN(makeInt('sldkjflksjf'))

function preserveDecimal(n) {
  n = parseFloat(n) 
  return n
}

preserveDecimal('2.222')
isNaN(makeInt('sldkjflksjf'))

