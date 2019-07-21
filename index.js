var add = (a, b) =>{
  var result = a + b;
  return result;
}

var subtract = (a, b) =>{
  var result = a - b;
  return result;
}

var multiply = (a, b) =>{
  var result = a * b;
  return result;
}

var divide = (a, b) =>{
  var result = a / b;
  return result;
}

var inc = (n) =>{
  return n += 1;
}

var dec = (n) =>{
  return n -= 1;
}

var makeInt = (n) =>{
  return parseInt(n);
}

var makeInt = (n) =>{
  return parseInt(n, 10);
}

function preserveDecimal(n){
  return parseFloat(n);
}
