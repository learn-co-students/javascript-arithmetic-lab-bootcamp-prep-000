function add(a,b){
  var number = parseInt(a)+parseInt(b)
  return(number)
}

function subtract(a,b){
  var number = parseInt(a)-parseInt(b)
  return(number)
}

function multiply(a,b){
  var number = parseInt(a)*parseInt(b)
  return(number)
}

function divide(a,b){
  var number = parseInt(a)/parseInt(b)
  return(number)
}

function inc(n){
  return(n += 1)
}

function dec(n){
  return(n -= 1)
}

function makeInt(n){
  return(parseInt(n,10))
}

function preserveDecimal(n){
  return(parseFloat(n))
}
