function add(a, b){
  return a+b
}

function subtract(a, b){
  return a-b
}

function multiply(a, b){
  return a*b
}

function divide(a, b){
  return a/b
}

function inc(n){
  n+= 1
  return n 
}

function dec(n){
  n-=1
  return n 
}

function makeInt(n){
  //parses n as int and returns 
  //assumes base 10
  //returns Nan as appropriate
  
  return parseInt(n,10)
}

function preserveDecimal(n){
  //preserves n's decimals (it parses n as a floating point num)
  //returns the parsed number 
  //returns NaN as appropriate
  return parseFloat(n)
}
