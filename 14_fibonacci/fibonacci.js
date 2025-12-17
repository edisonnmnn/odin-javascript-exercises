const fibonacci = function(v) {


    let n = parseInt(v, 10);

    if (n < 0) {
        return "OOPS";
    }
    let first = 1;
    let second = 1;
    if (n == 1 || n == 2 ) {
        return 1;
    }

    let curr = 0;
    for (let i = 0; i < n - 2; i++) {
        curr = first + second;
        first = second;
        second = curr;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
