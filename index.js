function add(a, b){
  if(typeof a === "number" && typeof b === "number")
    return a + b
  else if (typeof a === "number")
    return a + parseFloat(b)
  else
    return parseFloat(a) + b
}

function subtract(a, b){
  if(typeof a === "number" && typeof b === "number")
    return a - b
  else if (typeof a === "number")
    return a - parseFloat(b)
  else
    return parseFloat(a) - b
}

function multiply(a, b){
  return parseFloat(a) * parseFloat(b)
}

function divide(a, b){
  return parseFloat(a) / parseFloat(b)
}


function makeInt(a){
  return parseInt(a, 10)
}

function preserveDecimal(n){
  return parseFloat(n)
}

function inc(n){
  return parseFloat(n) + 1
}

function dec(n){
  return parseFloat(n) - 1
}
