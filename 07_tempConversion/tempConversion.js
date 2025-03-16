const convertToCelsius = function(tempInFah) {
  const formula = (tempInFah - 32) * (5 / 9);
  const rounded = parseFloat(formula.toFixed(1));
  return rounded;
};

const convertToFahrenheit = function(tempInCel) {
  const formula = tempInCel * (9 / 5) + 32;
  const rounded = parseFloat(formula.toFixed(1));
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
