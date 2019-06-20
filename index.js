
function add(a, b){
  return a += b
}

function subtract(a, b){
  return a -= b
}

function multiply(a, b){
  return a *= b
}

function divide(a, b){
  return a /= b
}

function inc(n){
  var incNum = n
  return incNum+= 1
}

function dec(n){
  var decNum = n
  return decNum-= 1
}

function makeInt(n){
  var parseNum = n
  if (parseInt(parseNum, 10) === "NaN"){
     return parseNum
   }
   else {
     parseNum = parseInt(parseNum, 10)
     return parseNum
   }
}

function preserveDecimal(n){
  var preserveNum = n
   if (parseFloat(preserveNum) === "NaN"){
     return preserveNum
   }
   else {
    preserveNum = parseFloat(preserveNum)
    return preserveNum
   }
}
