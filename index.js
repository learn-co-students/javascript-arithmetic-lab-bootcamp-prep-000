function add(a,b) {
 return a + b;
}


function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
 return a * b;
}

function divide(a,b) {
  return a / b;
}

function inc(a) {
  console.log (a++);
  return (a);

}
function dec(a) {
  console.log (a--);
  return (a);
}

function makeInt(a) {
  var parsed = parseInt(a, 10);
  console.log(parsed);
  return(parsed);
  
}

function preserveDecimal(a) {
  var parsedfloat = parseFloat(a, 10);
  console.log(parsedfloat);
  return(parsedfloat);
}