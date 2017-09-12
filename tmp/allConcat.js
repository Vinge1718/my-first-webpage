// User Interface/ FRONT END
var Calculator = require("./../js/calculator.js").calculatorModule;

$(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var simpleCalculator = new Calculator("hot Pink");
    var additionResult = simpleCalculator.add(number1, number2);
    $("#add-output").text(additionResult);

  });

  $("form#subtract").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var simpleCalculator = new Calculator("hot Pink");
    var subtractionResult = simpleCalculator.subtract(number1, number2);
    $("#subtract-output").text(subtractionResult);

  });

  $(".refresh-btn").on("click", function(){location.reload();});

  $("#button").click(function() {

    var userNumber = parseInt($("#input").val());
    var simpleCalculator = new Calculator("hot Pink");

    var results = simpleCalculator.output(userNumber);
    var displayResults = $(".displayResults");
    for (var i = 0; i < results.length; i++) {

      displayResults.append('<li>' + results[i] + '</li>');
    }
  });
});

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
