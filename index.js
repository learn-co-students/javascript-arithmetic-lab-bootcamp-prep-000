var a, b

function() {
  a = *1000
  b = *1000
}

function() {
  return add(a,b);
    add(a + b) // a + b
  }

function() {
  return subtract(a,b);
    subtract(a - b) // a - b
}

function() {
  return multiply(a,b);
    multiply(a * b) // a * b
}

function() {
  return divide(a,b);
    divide(a / b) // a / b
}

function() {
  return inc(n);
    inc(a) // a + 1
}

function() {
  return dec(n);
    dec(a) // a - 1
}

function makeInt(n) {
  function() {
    return parseInt(n);
      makeInt(a.toString()) // a
  }
}

function() {
  parseInt(n, 10);
    makeInt('0x2328') // 0
}

function() {
  return parseInt('appropriate', n);
    isNaN(makeInt('sldkjflksjf')) // true
}

function preserveDecimal(n) {
  function() {
    return parseFloat(n);
      preserveDecimal('2.222') // 2.222
  }
}
