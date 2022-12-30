const add = function(num1, num2) {
	const addition = num1 + num2;
  return addition;
};

const subtract = function(num1, num2) {
	const subtraction = num1 - num2;
  return subtraction;
};

const sum = function(numbers) {
  let summation = numbers.reduce(function(prev, curr){
    return curr + prev;
  }, 0);
  return summation;
};

const multiply = function(numbers) {
  let multiplication = numbers.reduce(function(prev, curr){
    return curr * prev;
  }, 1);
  return multiplication;
};

const power = function(number, power) {
	const exp = number ** power;
  return exp;
};

const factorial = function() {
	
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
