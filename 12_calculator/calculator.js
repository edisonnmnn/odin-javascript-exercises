
const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((prev, curr) =>
    (prev + curr), 0
  )
};

const multiply = function(array) {
  return array.reduce((prev, curr) =>
    (prev * curr), 1
  )
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(n) {
  let tot = 1;

  if (tot > 0) {
    for (let i = 0; i < n; i++) {
      tot = tot * (n - i);
    }
  }
  
  return tot;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
