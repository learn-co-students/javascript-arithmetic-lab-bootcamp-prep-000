function add(a, b) 
{
  return a + b
}

function subtract(a, b) 
{
  return a - b
}

function multiply(a, b) 
{
  return a * b
}

function divide(a, b) 
{
  return a / b
}

function inc(n) 
{
 var number = 1
 return n += number
}

function dec(n) 
{
 var number = 1
 return n -= number
}

function makeInt(n)
{
  var parsed = parseInt(n, 10)
  return parsed
}

function preserveDecimal(n)
{
  var parsed = parseFloat(n)
  return parsed
}