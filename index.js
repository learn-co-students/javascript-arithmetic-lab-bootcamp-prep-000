//Add a to b
function add(a, b){
  return (a+b)
}
// Subtract a and b 
function subtract(a, b){
return(a-b)
}
// return a multiplied by b 
function multiply(a, b){
  return(a*b)
}
// return a divided by b 
function divide(a, b){
  return(a/b)
}
// return n inclining 
function inc(n) {
  return (n += 1)
}
// return n declining 
function dec(n){
return (n -= 1)

}
//Return Parseint 
function makeInt(n) {
 return parseInt(n, 10);
}
//preserveDecimals
function preserveDecimal(n) {
  return parseFloat(n, 10.80)
}

//preserveDecimal returns NaN 
function preserveDecimal(n){
 return parseFloat(n, 12.222)
 }

