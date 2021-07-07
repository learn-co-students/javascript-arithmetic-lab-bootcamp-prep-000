var a = 2;
var b = 3;
add(a,b)

subtract(a,b)
multiply(a,b);
divide(a,b)
inc(3)
dec(4)
makeInt('2', a)
makeInt('3', 10)
makeInt('Food', 2)
preserveDecimal('39.999999')

function  add (a,b){
  return a+b
}
function subtract(b,a){
  return b-a
}
function multiply(a,b){
  return a*b
}

function divide(a,b){
  return a/b
}

function inc(a){
  return a+=1
}

function dec(a){
  return a-=1
}

function makeInt(n){
 return parseInt(n,10)
  
}

function preserveDecimal(n){
  return parseFloat(n)
}








