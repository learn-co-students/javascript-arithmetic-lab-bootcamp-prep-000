function add() {
    return Array.prototype.reduce.call(arguments, function(a, b) {
        return a + b;
    }, 0);
}

function subtract() {
    return Array.prototype.reduce.call(arguments, function(a, b) {
        var c = a - b;
        return c;
});
}

function multiply() {
    return Array.prototype.reduce.call(arguments, function(a, b) {
        var c = a * b;
        return c;
    });
}

function divide() {
    return Array.prototype.reduce.call(arguments, function(a, b) {
        var c = a / b;
        return c;
    });
}

function inc(n) {
 var number = n + 1;
  return number;
}

function dec(n) {
  var number = n - 1;
  return number;
}

function makeInt(n){
var number = parseInt(n, 10);
return number;
}

function preserveDecimal(n){
 var number = parseFloat(n, 10);
  return number;
}