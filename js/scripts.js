$(document).ready(function() {
  $("form#counter").submit(function(event) {
    event.preventDefault();

    var userCountTo = parseInt($("input#countTo").val());
    var userCountBy = parseInt($("input#countBy").val());

    if (userCountBy > userCountTo) {
      alert("Invalid response. The destination number must be larger than the multiple.");
      return;
    } else if (userCountBy === 0 || userCountBy < 0 || userCountTo < 0) {
      alert("Invalid response. The multiple cannot be 0 and neither input can be negative.");
      return;
    } else if (isNaN(userCountTo) || isNaN(userCountBy)) {
      alert("Invalid response. Your input is not a number!");
      return;
    } else if (!userCountBy || !userCountTo) {
      alert("Invalid response. The box cannot be empty.");
      return;
    }

    var array = [];
    for (var i = 0; i <= userCountTo; i++) {
      array[i]=i;
    };

    for (var i = 0; i <= userCountTo; i += userCountBy) {
      $("ul.answer").append("<li>" + array[i] + "</li>");
    };

    $(".output").show();
  });
});
