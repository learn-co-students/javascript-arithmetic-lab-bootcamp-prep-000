function add (a,b){
  var sum=a+b
  a=2
  b=3
return sum
}
function subtract (a,b){
  var diff=a-b
  a=2
  b=3
return diff  
}
function multiply (a,b){
  var product=a*b
  a=2
  b=3 
return product
}
function divide (a,b){
  var quotient=a/b
return quotient
}
function inc(n){
  return n+1
}
function dec(n){
  return n-1
}
function makeInt(n){
  var parsed=parseInt(n,10);
  if (isNaN(parsed)) {
    return NaN;
  } else {
    return parsed;
  }
}

function preserveDecimal(n) {
  const parsed = parseFloat(n);
  
  if(isNaN(parsed)) {
    return NaN;
  } else {
    return parsed;
  }
}