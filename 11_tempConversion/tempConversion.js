function roundToDecimal(num, decimalPlaces ) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(factor * num) / factor;
}
const convertToCelsius = function(x) {
  return roundToDecimal((x - 32) * (5/9), 1);
};

const convertToFahrenheit = function(x) {
  return roundToDecimal((x * 9 / 5) + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
