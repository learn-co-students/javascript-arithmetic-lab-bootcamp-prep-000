function add(a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function multiply(a ,b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

/*Doesnt work
function inc(n) {
  return n += 1
}
*/
//lesson examples declare a value to variables. maybe that would work.

/* function inc(n) {
  n = 1 //forgot to actually declare variable
  return n +=1;
}
*/


/*//Lets try again
function inc(n) {
  var n = 1 //variableis outside function in examples. the problem?
  return n +=1
} */

//IT WORKS!
var n = 1
function inc(n) {
return n +=1

}

var n = 2
function dec(n) {
  return n -= 1
}
/*
function makeInt(n) {
  return parseInt(n) // Didnt work. I forgot to include a second parameter. parseInt takes two. the number and the base.
}
*/

function makeInt(n) {
  return parseInt(n, 10)
}


function preserveDecimal(n) {
  return parseFloat(n)
}
