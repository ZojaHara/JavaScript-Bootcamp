// Fourth week
// homework no. 4

(function($) {

  $(document).ready(function() {

    var button = $("#button"),
        url = "http://code.eduweb.pl/bootcamp/users/",
        section = $("#section");



    button.on("click", function() {

      $.getJSON(url, function(data) {
        $.each(data, function(i, elem) {

          var ul = $("<ul></ul>").addClass("list").appendTo(section);

          for(var key in elem) {
            var li = $("<li></li>");

            if(key==="name" || key==="username" || key==="email" || key==="phone") {
              li.text(key + ": " + elem[key]);
              li.appendTo(ul);
            }
          }

        });
      });

      $(this).attr("disabled", "disabled").text("Gotowe!");
    });

  });


  // $(document).ready(function() {
  //
  //   var button = $("#button"),
  //       url = "http://code.eduweb.pl/bootcamp/users/",
  //       section = $("#section");
  //
  //
  //
  //   button.on("click", function() {
  //     var ul = $("<ul></ul>").addClass("list");
  //     $.getJSON(url, function(data) {
  //       $.each(data, function(i, elem) {
  //
  //
  //           var li = $("<li></li>", {
  //             "html":
  //               "Name: " + elem.name +"<br>" +
  //               "Username: " + elem.username +"<br>" +
  //               "E-mail: " + elem.email +"<br>" +
  //               "Phone: " + elem.phone,
  //             "css": {
  //               "margin-bottom":20
  //             }
  //           });
  //
  //           li.appendTo(ul);
  //
  //       });
  //           ul.appendTo(section);
  //     });
  //
  //   });
  //
  // });

})(jQuery);
