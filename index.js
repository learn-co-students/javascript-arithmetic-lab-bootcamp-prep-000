//add
function add(a,b){
console.log('In add')
  return a+b
}
//subtract
function subtract(a,b){
  return a-b
}
//multiply
function multiply(a,b){
  return a*b
}
function divide(a,b){
  return a/b
}
//increment function
function inc(n){
 return ++n
}
//decrement function
function dec(n){
  return --n
}
//parseInt function
function makeInt(n){
  console.log('In ParseINT')
  return parseInt(n,10)
}
//Decimal
function preserveDecimal(n){
 console.log('In preserveDecimal')
 console.log(parseFloat(n) )
 return parseFloat(n) 
}