function makeInt(n){
  return parseInt(n,10)
}

console.log(makeInt("10"))

function preserveDecimal(n){
  return parseFloat(n)
}
console.log(preserveDecimal('80.111'))

function add(x,y){
  return(x+y)
}

function subtract(x,y){
  return(x-y)
}
function multiply(x,y){
  return(x*y)
}
function divide(x,y){
  return(x/y)
}
function inc(n){
  return(n+1)
}
function dec(n){
  return(n-1)
}
console.log(inc(178))