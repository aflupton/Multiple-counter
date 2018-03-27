$(document).ready(function() {
  $("form#counter").submit(function(event) {
    event.preventDefault();

    var userCountTo = parseInt($("input#countTo").val());
    var userCountBy = parseInt($("input#countBy").val());

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
