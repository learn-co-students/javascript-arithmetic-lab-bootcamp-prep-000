function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function inc(n){
    var num = n+1;
    return num;
}
function dec(n){
    var num = n-1;
    return num;
}

function makeInt(n){
    var num = parseInt(n, 10);
    return num;
}

function preserveDecimal(n){
    if(typeof n !== NaN){
        return parseFloat(n);
    }
    return NaN;
}
