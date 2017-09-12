//BUSINESS END / BACKEND LOGIC
function Calculator(skinName){
  this.skin = skinName;
}
//PINGGPONG JS
Calculator.prototype.output = function(input){

var divisibilityTest = function(i){
  if (i % 3 === 0 && i % 5 === 0){
    return "pingpong";
  }
  else if (i % 3 === 0) {
    return "ping";
  }
  else if (i % 5 === 0) {
    return "pong";
  }
  else {
    return i;
  }
};

var results = [];

for (var i = 1; i <= input; i++) {
  results.push(divisibilityTest(i));
}
return results;
};

//calculator BACK-END
Calculator.prototype.add = function (number1, number2) {
  return (number1 + number2)
};

Calculator.prototype.subtract = function (number1, number2) {
  return (number1-number2)
};

Calculator.prototype.multiply = function (number1, number2) {
  return(number1*number2)
};

Calculator.prototype.divide = function (number1, number2) {
  return(number1/number2)
};

exports.calculatorModule = Calculator;
