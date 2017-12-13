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

function makeInt(a){
  if(parseInt(a,10) === a)
  {
  return a}
  
  else if(parseInt(a,10)===0)
  {
    return 0
  }
  
  else return parseInt(a,10)
}


function preserveDecimal(a){
  return parseFloat(a)
}
