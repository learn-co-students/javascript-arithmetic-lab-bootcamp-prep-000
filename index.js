var add = function(a,b) {
  return a + b;
}

var subtract = function(a,b) {
  return a - b;
}

var multiply = function(a,b) {
  return a * b;
}

var divide = function(a,b) {
  return a/b;
}

var inc = function(n) {
  n += 1
  return n
}

var dec = function(n) {
  n -= 1
  return n;
}

var makeInt = function(n) {
  n = parseInt(n,10);
  return n
}

var preserveDecimal = function(n) {
  n = parseFloat(n)
  return n;
}
