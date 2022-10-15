const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
}

const sum = function(x) {
	return x.length > 0 ? x.reduce((sum, x) => sum + x) : 0;
};

const multiply = function(x, y) {
  return x.reduce((sum, x) => sum * x);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(n) {
	return n <= 0 ? 1 : n * factorial(n - 1);
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
