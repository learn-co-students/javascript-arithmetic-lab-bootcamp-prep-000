function add(a,b){
  return a+b
}

function subtract(a,b){
  return a-b
}

function multiply(a,b){
  return a*b
}

function divide(a,b){
  return a/b
}

function inc(n){
  n++
  return n
}

function dec(n){
  n--
  return n
}

function makeInt(n){
  if (isNaN(parseInt(n,10))){
    return
  }
  else {
    return parseInt(n,10)
  }
}

function preserveDecimal(n){
  if (isNaN(parseFloat(n,10))){
    return
  }
  else {
    return parseFloat(n,10)
  }
}