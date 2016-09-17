/*it('add(a, b) adds two numbers and returns the result', function() {
  expect(add(a, b)).toEqual(a + b)
}) */

var add = function(a,b) {
  return a+b
}
var subtract = function(a,b) {
  return a-b
}

var multiply = function(a,b) {
  return a*b
}

var divide = function(a,b) {
  return a/b
}

var inc = function(n){
  return ++n
}

var dec = function(n){
  return --n
}

var makeInt = function(n) {
  return parseInt(n, 10)
}

var preserveDecimal = function(n) {
  return parseFloat(n)
}
