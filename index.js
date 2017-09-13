var add = function(a, b) {
    return a + b;
};

var subtract = function(a, b) {
    return a - b;
};

var multiply = function(a, b) {
    return a * b;
};

var divide = function(a, b) {
    return a / b;
};

var inc = function(a) {
    a++;
    return a;
};

var dec = function(a) {
    a--;
    return a;
};

var makeInt = function(a) {
    if (a.isNaN === NaN) {
        return NaN;
    } else {
        return parseInt(a, 10);
    }
};

var preserveDecimal = function(a) {
    if (a.isNaN === NaN) {
        return NaN;
    } else {
        return parseFloat(a);
    }
};
