function add(a,b){
  return a+b
}
function subtract(a,b){
  return a-b
}
function multiply(a,b){
  return a*b
}
function divide(a,b){
  return a/b
}
function inc(n){
  return ++n
}
function dec(n){
  return --n
}
function makeInt(n){
  if (parseInt(`n`)===NaN){
    return true
  }
  else {
    return parseInt(n,10).toString()
  }
}
function preserveDecimal(n){
  if (parseFloat(`n`)=== NaN){
    return true
  }
  else {
    return parseFloat(n)
  }
}
