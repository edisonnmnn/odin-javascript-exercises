const sumAll = function(a, b) {
    if (!(Number.isInteger(a) && Number.isInteger(b))) {
        return "ERROR";
    } else if (a < 0 || b < 0) {
        return "ERROR";
    }
    sum = 0;
    
    if (a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }

    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
