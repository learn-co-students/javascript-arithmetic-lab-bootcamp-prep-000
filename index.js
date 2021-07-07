add = (a, b) => a + b
subtract = (a, b) => a - b
multiply = (a, b) => a * b
divide = (a , b) => a / b
inc = n => n + 1
dec = n => n - 1
makeInt = n => parseInt(n, 10)
preserveDecimal = n => parseFloat(n)


module.exports = {
  add,
  subtract,
  multiply,
  divide,
  inc,
  dec,
  makeInt,
  preserveDecimal
}