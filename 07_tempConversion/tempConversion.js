const convertToCelsius = function(tempInFarenheit) {
  const celsius = ((tempInFarenheit - 32) / 1.8);
  const cels = parseFloat(celsius.toFixed(1));
  return cels;
};

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
