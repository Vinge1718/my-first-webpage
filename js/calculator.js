//BUSINESS END / BACKEND LOGIC


  var add = function (number1, number2) {
  return (number1 + number2)
};

var subtract = function (number1, number2) {
  return (number1-number2)
};

var multiply = function (number1, number2) {
  return(number1*number2)
};

var divide = function (number1, number2) {
  return(number1/number2)
};


// User Interface/ FRONT END
$(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var additionResult = add(number1, number2);
    $("#add-output").text(additionResult);

  });

  $("form#subtract").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var subtractionResult = subtract(number1, number2);
    $("#subtract-output").text(subtractionResult);

  });
});
