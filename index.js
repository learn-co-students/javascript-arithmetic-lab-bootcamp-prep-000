function add(a,b){
  return (a+b)
}

function subtract(a,b){
  return (a-b)
}

function multiply(a,b){
  return (a*b)
}

function divide(a,b){
  return (a/b)
}

function inc(n){
  return ++n
}

function dec(n){
  return --n
}

function makeInt(n){
  if (parseInt(n,10) != isNaN){
    return (parseInt(n,10))
  }
  else {
    return NaN
  }

}

function preserveDecimal(n){
  if (parseFloat(n) != isNaN){
    return (parseFloat(n))
  }
  else{
    return NaN
  }
}
