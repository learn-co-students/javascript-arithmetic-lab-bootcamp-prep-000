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
  return ++n
}

function dec(n) {
  return --n
}


function preserveDecimal(n) {
  if(isNaN(n)) {
    return 'NaN as appropriate'
  }
  else {
    return parseFloat(n)
  }
  
}

function makeInt(n) {
  if(isNaN(n)) {
    return "Nan as appropriate"
  }
  else {
    return parseInt(n, 10)
  }
}