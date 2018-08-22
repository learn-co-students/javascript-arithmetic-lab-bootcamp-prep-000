function add(a,b) {
 return (a+b)
}
function subtract (a,b) {
  return (a-b)
}
function multiply(a,b) {
 return (a*b) 
}
function divide(a,b) {
  return (a/b) 
}
function inc(n) {
  n++
  return n;
}
function dec(n) {
  n--
  return n;
}

function makeInt(n,base) {
  base = 10
  var parsed = parseInt(n,base)
  return parsed
}

function preserveDecimal(n) {
  var parsedfloat = parseFloat(n)
  return parsedfloat;
}
