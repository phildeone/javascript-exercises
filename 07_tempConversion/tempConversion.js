// A function to convert temperature from Fahrenheit to Celsius.
const convertToCelsius = function(tempInFarenheit) {
  const celsius = ((tempInFarenheit - 32) / 1.8);
  const cels = parseFloat(celsius.toFixed(1));
  return cels;
};

// A function to convert temperature from Celsius to Fahrenheit.
const convertToFahrenheit = function(tempInCelsius) {
  const fahrenheit = ((tempInCelsius * 1.8) + 32);
  const fahr = parseFloat(fahrenheit.toFixed(1));
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
