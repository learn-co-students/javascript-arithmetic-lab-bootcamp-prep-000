function add(num1,num2) {
  var sum = (parseInt(num1) + parseInt(num2));
  return sum;
}
function subtract(num1,num2) {
  var difference = (parseInt(num1) - parseInt(num2));
  return difference;
}

function multiply(num1,num2) {
  var product = (parseInt(num1) * parseInt(num2));
  return product;
}

function divide(num1,num2) {
  var quotient = (parseInt(num1) / parseInt(num2));
  return quotient;
}

function inc(addedOne) {
  addedOne = parseInt(addedOne) + 1;
  return addedOne;
}

function dec(minusOne) {
  minusOne = parseInt(minusOne) - 1;
  return minusOne;
}

function makeInt(newInt) {
      newInt = parseInt(newInt,10);
      if (newInt.isNaN) {
        return 0;
      } else {
      return newInt;
  }
}

function preserveDecimal(newFloat) {
  newFloat = parseFloat(newFloat);
  if (newFloat.isNaN) { return "appropriate" ;
  } else {
  return newFloat;
  }
}
