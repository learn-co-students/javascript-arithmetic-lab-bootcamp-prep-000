const add = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}

const inc = n => {
  n++;
  return n;
}

const dec = n => {
  n--;
  return n;
}

const makeInt = n => {
  let result = parseInt(n, 10)
  if (typeof result !== 'number') return NaN;
  return result;
}

const preserveDecimal = n => {
  let result = parseFloat(n);
  if (typeof result !== 'number') return NaN;
  return result;
}




