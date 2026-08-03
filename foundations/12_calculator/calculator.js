const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, item) => sum += item, 0);
};

const multiply = function(array) {
  return array.reduce((sum, item) => sum *= item, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  let currentTotal = 1;
	for (let i = num; i > 1; i--) {
    currentTotal *= i;
  };

  return currentTotal;
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
