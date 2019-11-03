function add(a,b) {
  return a+b; 
}
function subtract (a,b) {
  return a-b
} 
function multiply  (a,b) {
  return a*b
}
function divide(a,b) {
  return a/b
}
function inc(a){
  return ++a
}
function dec(a){
  return --a
}
function makeInt(a){
 parseInt(a) 
 parseInt('a',10)
 parseInt('nonsense!')
 return parseInt(a,10)
}
function preserveDecimal(a){
  parseFloat(a)
  parseFloat('nonsense!')
  return parseFloat(a)
}