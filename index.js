function add(a, b){
  return parseFloat(a) + parseFloat(b)
}

function subtract(a, b){
  return (parseFloat(a) - parseFloat(b))
}

function multiply(a, b){
  return (parseFloat(b) * parseFloat(a))
}

function divide(a, b){
  return (parseFloat(a) / parseFloat(b))
}

function inc(n){
  return ++n
}

function dec(n){
  return --n
}

function makeInt(n){
  return parseInt(n, 10)
}

function preserveDecimal(n){
  return parseFloat(n)
}
