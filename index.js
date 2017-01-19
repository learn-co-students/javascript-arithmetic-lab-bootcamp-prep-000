function add(int1, int2) {
  return (int1 + int2);
}

function subtract(int1, int2) {
  return (int1 - int2);
}

function multiply(int1, int2) {
  return (int1 * int2);
}

function divide(int1, int2) {
  return (int1 / int2);
}

function inc(int) {
  return ++int;
}

function dec(int) {
  return --int;
}

function makeInt(int) {
  var isInt = parseInt(int, 10);

  if (isInt === 0) {
    return 0;
  }

  if (isInt !== NaN) {
    return int;
  }

  return NaN;
}

function preserveDecimal(float) {
  var isFloat = parseFloat(float);

  if (isFloat !== 'NaN') {
    return float;
  }

  console.log(float + ' is not an integer.');
}
