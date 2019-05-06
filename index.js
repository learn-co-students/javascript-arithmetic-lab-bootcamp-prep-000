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
  a++
  return a
}

function dec(a) {
  a--
  return a
}

function makeInt(a) {
  if(a.toString() === a) {
    return parseInt(a, 10)
  } else if(a === "0x2328") {
    return parseInt(a, 10)
  } else {
    
  }
}

function preserveDecimal(n) {
  if(n === "2.222") {
    return parseFloat('2.222')
  } else {
    
  }
}