$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var dateInput = $("input#date").val();
    var nameInput = $("input#name").val();
    var exclamationInput= $("input#exclamation").val();
    var locationInput = $("input#location").val();
    var adjetiveInput = $("input#adjetive").val();
    var celebrity1Input = $("input#celebrity1").val();
    var celebrity2Input = $("input#celebrity2").val();
    var amountInput = $("input#amount").val();
    var numberInput = $("input#number").val();
    var housingTypeInput = $("input#housingType").val();
    var animalInput = $("input#animal").val();

    $(".date").append(dateInput);
    $(".name").append(nameInput);
    $(".exclamation").append(exclamationInput);
    $(".location").append(locationInput);
    $(".adjetive").append(adjetiveInput);
    $(".celebrity1").append(celebrity1Input);
    $(".celebrity2").append(celebrity2Input);
    $(".amount").append(amountInput);
    $(".number").append(numberInput);
    $(".housingType").append(housingTypeInput);
    $(".animal").append(animalInput);

    $("#letter").show();

    event.preventDefault();
  });
});
