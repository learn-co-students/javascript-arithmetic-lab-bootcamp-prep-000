var add = function (a,b){
  return a + b
}; console.log(add (3,6))

var subtract = function (a,b){
  return a - b
}; console.log (subtract(9,3))

var multiply = function (a,b){
  return a * b
}; console.log (multiply(8,7))

var divide = function (a,b){
  return a / b
}; console.log (divide(9,3))

var inc = function (n){
  return ++n
}; console.log (inc(68))

var dec = function (n){
  return --n
}; console.log (dec(68))

var makeInt = function (n){
  return parseInt(n,10)
}

var preserveDecimal = function (n){
  return parseFloat(n)
}
