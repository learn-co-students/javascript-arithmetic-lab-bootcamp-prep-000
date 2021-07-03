function add(a, b, string) {
  string = a + b
  return string
}

function subtract(a, b, string) {
  string =  a - b
  return string
}

function multiply(a, b, string) {
  string = a * b
  return string
}

function divide(a, b, string) {
  string = a / b
  return string
}

function inc(n, string) {
  string = n++
  return n
}

function dec(n, string) {
  string = n--
  
  string = n--
  return string
}

function makeInt(n, string) {
  string = parseInt(n, 10)
  return string
}

function preserveDecimal(n, string) {
  string = parseFloat(n)
  return string
}
