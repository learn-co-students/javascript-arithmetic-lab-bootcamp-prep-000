function add(a, b) {
  return (a + b)
}

function subtract(a, b) {
  return (a - b)
}

function multiply(a, b) {
  return (a * b)
}

function divide(a, b) {
  return (a / b)
}

function inc(n) {
  return (n+1)
}

function dec(n) {
  return (n-1)
}

function makeInt(n){
  return parseInt(n)
}

//makeInt(n) assume base 10
function makeInt(n){
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseInt(n)
}  

 function preserveDecimal(NaN) {
  return parseFloat(NaN)
}  



