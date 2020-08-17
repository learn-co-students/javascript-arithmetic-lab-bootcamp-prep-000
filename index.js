function add(a, b){
  return (a + b);
}
function subtract(a, b){
  return (a - b);
}
function multiply(a, b){
  return (a * b);
}
function divide(a, b){
  return (a / b);
}
 function increment(n,){
   return (++n);
 }
 function decrement(n){
   return (--n);
}
function makeInt(n){
  return parseInt(n , 10)
}
function preserveDecimal(n){
  return parseFloat(n);
}


console.log(divide(10,2));
console.log(add(5,3));
console.log(subtract(10,3));
console.log(multiply(6,2));
console.log(increment(5));
console.log(decrement(5));
console.log(makeInt('2'));
console.log(preserveDecimal(10.4454));
