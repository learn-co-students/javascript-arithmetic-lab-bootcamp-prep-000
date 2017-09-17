function makeInt(a) {
  // if(typeof(a) == 'st')
  if(a.indexOf('0x') == 0) {
    return 0
  }
  return parseInt(a)
}

function preserveDecimal(n) {
  return parseFloat(n)
}

function add(a, b) {
  return a+b
}

function subtract(a, b) {
  return a-b
}

function multiply(a, b) {
  return a*b
}

function divide(a, b) {
  return a/b
}

function inc(a) {
  return a+1
}

function dec(n) {
  return n-1
}
