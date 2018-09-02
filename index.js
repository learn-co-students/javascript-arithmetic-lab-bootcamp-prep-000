//problem 1 
function add(a,b) {
  return a+b 
}
console.log(add(4,2))

//problem 2 
function subtract(a,b) {
  return a-b 
}
console.log(subtract(4,2))

//problem 3 
function multiply(a,b) {
  return a*b 
}
console.log(multiply(4,2))

//problem 4 
function divide(a,b) {
  return a/b 
}
console.log(divide(4,2))

//problem 5 
function inc(n) {
  n++;
  return n;
}
console.log(inc(6))

//problem 6 
function dec(n) {
  n--;
  return n;
}
console.log(dec(6))

//problem 7 
function makeInt(n) {
 return parseInt(n, 10)
}
console.log(makeInt("30"))
console.log(makeInt('Hello'))

//problem 8 
function preserveDecimal(n) {
  return parseFloat(n)
}
console.log(preserveDecimal('2.445664'))
