(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add(a,b) {
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

function inc(a) {
  return (a += 1)
}

function dec(a) {
  return (a -= 1)
}

function makeInt(n) {
  if (n = parseInt(n,10)){
    return parseInt(n)
  }
  else {
    return ("NaN")
  }
}

function preserveDecimal(n) {
  if (n = parseFloat(n)) {
    return parseFloat(n)
  }
  else {
      return ("NaN")
  }
}
