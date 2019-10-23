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

    $(".date").text(dateInput);
    $(".name").text(nameInput);
    $(".exclamation").text(exclamationInput);
    $(".location").text(locationInput);
    $(".adjetive").text(adjetiveInput);
    $(".celebrity1").text(celebrity1Input);
    $(".celebrity2").text(celebrity2Input);
    $(".amount").text(amountInput);
    $(".number").text(numberInput);
    $(".housingType").text(housingTypeInput);
    $(".animal").text(animalInput);

    $("#letter").show();

    event.preventDefault();
  });
});
