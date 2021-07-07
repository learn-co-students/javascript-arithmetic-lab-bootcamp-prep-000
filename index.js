function add (a, b)
{
  var sum
  sum = a + b
  return sum
}

function subtract (a, b)
{
  var difference
  difference = a - b
  return difference
}

function multiply (a,b)
{
  var product
  product = a * b
  return product
}

function divide (a,b)
{
  var quotient 
  quotient = a / b
  return quotient
}

function inc (n)
{
  var increment 
  increment = n++
  return n
}

function dec(n)
{
  var decrement 
  decrement = n--
  return n
}

function makeInt(n)
{
  var convertStr
  convertStr = parseInt(n, 10)
  return convertStr
}

function preserveDecimal(n)
{
  var keepDecimal = parseFloat(n, 10)
  return keepDecimal
}