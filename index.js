function makeInt(n){
  var makeNum = parseInt(n, 10)

  return makeNum
}

function preserveDecimal(n){
    var makeDec = parseFloat(n)

    return makeDec
}

function add(a, b){
  var c = parseFloat(a) + parseFloat(b)
  return c
}

function subtract(a, b){
  var c = parseFloat(a) - parseFloat(b)
  return c
}
function multiply(a, b){
  var c = parseFloat(a) * parseFloat(b)
  return c
}
function divide(a, b){
  var c = parseFloat(a) / parseFloat(b)
  return c
}

function inc(n) {
  var c = n + 1
  return c
}

function dec(n) {
  var c = n - 1
  return c
}
