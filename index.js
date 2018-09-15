//Declaring the function 
function add(a,b) {
  return a + b;
}

// using hashRockect or Es6 
subtract = (a,b) => {
  return a - b;
}


 function multiply(a,b) {
  return a * b;
}

 function divide(a,b) {
  return a / b;
}
 
 // Naming the function expression 
// const inc = function inc(n) {
//   return n + 1
// }

function inc(n) {
  return n + 1
 }


function dec(n) {
  return n - 1
 }
 
 //assums base of 10
function makeInt(n) {
  return parseInt(n, 10)
 }
 
 
 function preserveDecimal(n) {
   if(n === 'undefined' || n === String) {
     return NaN
   }
   //or bellow
   return parseFloat(n) 
}

