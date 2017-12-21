function add(a, b){
  return a + b
}
function subtract(a, b){
  return a - b
}
function multiply(a, b){
  return a * b
}
function divide(a, b){
  return a / b
}
function inc(n){
  return n += 1
}
function dec(n){
  return n -= 1
}
function makeInt(n){
  if (isNaN(parseInt(n, 10))){
    return `${n} is Not a Number`
  }
  else{
    return parseInt(n, 10)
  }
}
function preserveDecimal(n){
  if (isNaN(parseFloat(n))){
    return `${n} is not a Number`
  }
  else{
    return parseFloat(n)
  }
}