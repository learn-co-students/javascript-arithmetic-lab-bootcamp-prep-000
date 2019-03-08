function add(a, b){
  return a+b
}
function subtract(a, b){
  return a-b
}
function multiply(a, b){
  return a*b
}
function divide(a, b)
{
  return a/b
}
function inc(a){
  return a+=1
}
function dec(a){
  return a-=1
}
function makeInt(a){
  return parseInt(a,10)
}
function isNaN(a){
  if (parseInt(a,10).toString()==="NaN"){
    return true
  }else{
    return false
  }
}

function preserveDecimal(a){
  return parseFloat(a)
}
