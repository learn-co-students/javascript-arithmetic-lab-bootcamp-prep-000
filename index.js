//add(a, b) adds two numbers and returns the result
function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a *  b
}

function divide(a, b) {
  return a /  b
}

function inc(a) {
  return ++a
}

function dec(a) {
  return --a
}

function makeInt(a) {
  return parseInt(a,10)
/*
  if (typeof a === 'string' || a instanceof String) {
    console.log(a)
    return parseInt(a)
  }
  else if (a == '0x2328'){
    return (parseInt('0x2328'))
  }
  else if (a == 'sldkjflksjf') {
    return parseInt('sldkjflksjf')
}
  else {
  }*/
}


function preserveDecimal(a) {
  return parseFloat(a)

  /*
  if (n == '2.222') {
  return parseFloat('2.222')
}
 else if ( n == 'sldkjflksjf' ) {
  return parseFloat('sldkjflksjf')
}
  else {}*/
}
