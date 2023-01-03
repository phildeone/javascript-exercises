//A function to perform addition of two numbers
const add = function(num1, num2) {
	const addition = num1 + num2;
  return addition;
};

// A fuction to perform subtraction of two numbers
const subtract = function(num1, num2) {
	const subtraction = num1 - num2;
  return subtraction;
};

// A function to sum a set of nubers in an array
const sum = function(numbers) {
  let summation = numbers.reduce(function(prev, curr){
    return curr + prev;
  }, 0);
  return summation;
};

// A function to multiply a set of numbers in an array
const multiply = function(numbers) {
  let multiplication = numbers.reduce(function(prev, curr){
    return curr * prev;
  }, 1);
  return multiplication;
};

// A function to perform the exponent(power) operation
const power = function(number, power) {
	const exp = number ** power;
  return exp;
};

// A function to perform the factorial operation on given numbers
const factorial = function(number) {
	if(number == 0 || number == 1){
    return 1;
  }else{
    return number * factorial(number-1);
  }
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
