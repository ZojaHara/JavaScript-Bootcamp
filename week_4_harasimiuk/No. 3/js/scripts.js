// Third week
// No. 3

// Fourth week
// homework no. 3

(function($) {

  $(document).ready(function() {

    var field = $("#field"),
        form = $("#form");

        var ul = $("<ul></ul>");
        form.before(ul);

    form.on("submit", function(e) {
      e.preventDefault();

      var fieldValue = $.trim(field.val());
      var li = $("<li></li>");

      if(fieldValue) {
        li.text(fieldValue).appendTo(ul);
      }else {
        console.log("Wpisz tekst!");
      }

    });

  });

})(jQuery);
