var n = 10,m = 5

function add(n, m) {
  return n + m
}

function subtract(n, m) {
  return n - m
}

function multiply(n, m) {
  return n * m
}

function divide(n, m) {
  return n / m
}

function inc(n) {
  n+=1
  return n
}

function dec(n) {
  n-=1
  return n
}

function makeInt(n) {
  n=parseInt(n,10)
  return n
}

function preserveDecimal(n) {
  n=parseFloat(n)
  return n
}
