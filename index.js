1+80
60-40
2*3.4
5.0/2.5

function add(a,b){
  return a+b
}

function subtract(a,b){
  return a-b
}

function multiply(a,b){
  return a*b
}

function divide (a,b){
  return a/b
}

function inc(a){
  a=a+1
  return a
}

function dec(a){
  a--
  return a
}

function makeInt(n){
  if(parseInt(n,10) === n)
  {
  return n}
  
  else if(parseInt(n,10)===0)
  {
    return 0
  }
  
  else return parseInt(n,10)
}


function preserveDecimal(n){
  return parseFloat(n)
}
