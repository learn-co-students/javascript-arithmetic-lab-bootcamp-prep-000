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
  return n+1
}

function dec(n){
  return n-1
}

function makeInt(n){
  var nombre = parseInt(n,10)
  if(nombre != NaN){
    return nombre
  }
}

function preserveDecimal(n){
  var nombre = parseFloat(n)
  if (nombre != NaN) {
    return nombre
  }

}
