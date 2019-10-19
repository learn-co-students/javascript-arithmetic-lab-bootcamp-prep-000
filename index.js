function add (a, b) {
 return (a, b = a + b)
 }
 function subtract (a, b) {
   return (a, b = a - b)
 }
 function multiply (a, b) {
   return (a, b = a * b)
 }
 function divide (a, b) {
   return (a, b = a / b)
 }
 function inc(a) {
   return (a = a + 1)
 }
 function dec(a) {
   return (a = a - 1)
 }
 function makeInt(n) {
   return parseInt(n, 10);
 }
 console.log(makeInt(2.222))
console.log(makeInt('0x2328'))

 function preserveDecimal(n) {
   return parseFloat(n)
 }