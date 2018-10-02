
function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function inc (n) {
  return ++ n
}

function dec (n) {
  return -- n
}

function makeInt (n, base) {
  var parsed = parseInt (n, 10);
  return parsed
}

function preserveDecimal (n, base) {
  var parsed = parseFloat (n, 10);
  return parsed
}
