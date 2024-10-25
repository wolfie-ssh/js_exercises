const convertToCelsius = function(inputFahrenheit) {
let c = (inputFahrenheit - 32) * (5/9);

return (Math.round(c*10)/10);

};

const convertToFahrenheit = function(inputCelcius) {
let f = (inputCelcius * (9/5)) + 32;
return (Math.round(f*10)/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
