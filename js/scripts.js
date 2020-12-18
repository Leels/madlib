$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    let words = ["date", "name", "exclamation", "location", "adjetive", "celebrity1", "celebrity2", "amount", "number", "housingType", "animal"]

    words.forEach(function(word) {
      let input = $("input#" + word).val();
      $("." + word).text(input);
    });

    $("#letter").show();

    event.preventDefault();
  });
});
