function add(a,b){
  return a+b;
}
function subtract(a,b){
  return a-b;
}
function multiply(a,b){
  return a*b;
}
function divide(a,b){
  return a/b;
}
function dec(n){
  return --n;
}
function inc(n){
  return ++n;
}
function makeInt(n){
  if(parseInt(n)===false)
  {
    return 'Nan';
  }
  else {
    return parseInt(n,10);
  }


}
function preserveDecimal(n){
  if(parseFloat(n)===false)
  {
    return 'NaN';
  }
  else
  return parseFloat(n);
}
