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
function inc(a){
  a += 1
  return a
}
function dec(a){
  a -= 1
  return a
}
function makeInt(n){
  var outputInt
  if (parseInt(n) === n){
    outputInt = parseInt(n)
  } else if (parseInt(n) === "NaN"){
    outputInt = "true"
  } else {
    outputInt = parseInt(n, 10)
  }
  return outputInt
}
function preserveDecimal(n){
  var outputFloat
  if (parseFloat(n) == n){
    outputFloat = parseFloat(n)
  } else if (parseFloat(n) === "NaN"){
    outputFloat = "true"
  }
  return outputFloat
}
