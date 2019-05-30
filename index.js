function add(a, b) {
    var result = a + b;
    return result;
}

function subtract(a, b) {
    var result = a - b;
    return result;
}
function multiply(a, b) {
    var result = a * b;
    return result;
}
function divide(a, b) {
    var result = a / b;
    return result;
}
function inc(n) {
    var result = n + 1;
    return result;
}
function dec(n) {
    var result = n - 1;
    return result;
}
function makeInt(n) {
    var parsed = parseInt(n, 10);
    return parsed;
}
function preserveDecimal(n) {
    var preserve = parseFloat(n, 10)
        return preserve;
}

console.log(add(10, 30));
console.log(subtract(78, 5));
console.log(multiply(45, 65));
console.log(divide(80, 25));
console.log(inc(87));
console.log(dec(67));
//console.log(makeInt('55'));
//console.log(makeInt(0x2767));
//console.log(preserveDecimal('sldkjflksjf'));
