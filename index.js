function add(a, b) {
  var answer = (a+b);
  return answer;
}

function subtract(a, b) {
  var answer = (a-b);
  return answer;
}

function multiply(a, b) {
  var answer = (a*b);
  return answer;
}

function divide(a,b) {
  var answer =( a/b);
  return answer;
}

function inc(n) {
  var answer = (n+=1);
  return answer;
}

function dec(n) {
  var answer = (n-=1);
  return answer;
}

function makeInt(n) {
  var b = 10;
  var answer = parseInt(n, b);
  return answer;
}

function preserveDecimal(n) {
  var answer = parseFloat(n);
  return answer;
}
