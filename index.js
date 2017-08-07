function add(a, b){
  return a + b
}

function subtract(a, b){
  return a - b
}

function multiply(a, b){
  return a * b
}

function divide(a, b){
  return a / b
}

function inc(n) {
    if (n < 0) {
        n += 1
        return n
    }

    n += 1
    return n
}

function dec(n) {
    if (n > 0) {
        n -= 1
        return n
    }

    n += 1
    return n
}

function makeInt(n){
  if(typeof(n) === "undefined"){
    return NaN
  }
  return parseInt(n, 10)
}

function preserveDecimal(n){
  return parseFloat(n)
}

function preserveDecimal(n){
  if(typeof(n) === "undefined"){
    return NaN
  }
  return parseFloat(n)
}
