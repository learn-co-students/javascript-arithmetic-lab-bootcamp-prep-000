 function add(a,b) { 
  return a + b ;
}


function subtract (a,b) { 
  return a - b 
}

function multiply (a,b) { 
  return a * b 
}

function divide (a,b) { 
  return a / b 
}
 
function inc (n){
  return n += 1
} 
//oddly enough can use "n" instead of "a" despite misleaing parts of index-text.js

function dec (n){
 /* var a=`${n}`;*/
  return n -= 1;
} 
//oddly enough this is the only function that testing will accept an interpolation method, despite the instructions in index-test.js talking about variable a

 function makeInt (a){
 return parseInt(a,10)
}

function preserveDecimal (n){
  return parseFloat(n)
}


