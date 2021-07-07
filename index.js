function add(a,b){
  return (a+b)
}

function subtract(a,b){
  return (a-b)
}

function multiply(a,b){
  return (a*b)
}

function divide (a,b){
  return (a/b)
}


function inc(n) {
  return (n+1)
}

function dec(n) {
  return (n-1)
}


function makeInt(n){
 if (isNaN(parseInt(n))) 
    return NaN
  return parseInt(n,10)
}

function preserveDecimal(n){
   if (isNaN(parseFloat(n))) 
    return NaN
  return parseFloat(n)
}