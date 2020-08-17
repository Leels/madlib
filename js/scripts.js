$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var inputs = ["date", "name", "exclamation", "location", "adjetive", "celebrity1", "celebrity2", "amount", "number", "housingType", "animal"]

  inputs.forEach(function(input) {
    var all = $("input#" + input).val();
    $("." + input).text(all);
  });

    $("#letter").show();

    event.preventDefault();
  });
});
