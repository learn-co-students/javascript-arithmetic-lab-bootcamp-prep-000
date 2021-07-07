function add(a,b){
  var num1 = parseInt(a);
  var num2 = parseInt(b);
  var total = num1 + num2;
  
  return total;
}

function subtract(a,b){
  var num1 = parseInt(a);
  var num2 = parseInt(b);
  var total = num1 - num2;
  
  return total;
}

function multiply(a,b){
  var num1 = parseInt(a);
  var num2 = parseInt(b);
  var total = num1 * num2;
  
  return total;
}

function divide(a,b){
  var num1 = parseInt(a);
  var num2 = parseInt(b);
  var total = num1 / num2;
  
  return total;
}

function inc(n){
  var num = parseInt(n);
  num += 1;
  
  return num;
}

function dec(n){
  var num = parseInt(n);
  num -= 1;
  
  return num;
}

function makeInt(n){
  var num = parseInt(n,10);
  return num;
}

function preserveDecimal(n){
  var num = parseFloat(n);
  return num;
}