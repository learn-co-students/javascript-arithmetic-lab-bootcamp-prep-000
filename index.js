function add (a , b){
  return a + b
}

function subtract (a , b){
  return a - b
}

function multiply (a , b){
  return a * b
}

function divide (a , b){
  return a / b
}

function inc (n){
  return n + 1
}

function dec (n){
  return n - 1
}

function makeInt (n){
  if(n < 0){
    return NaN
  } else {
    return parseFloat(n)
  }
}

function preserveDecimal (n){
  return parseFloat(n)
}
