// Fourth week
// homework no. 2

(function($) {

  $(document).ready(function() {
    var hamburger = $("#hamburger");
    var navig = $("#navig");

    hamburger.on("click", function() {

      navig.stop().toggleClass("translate");

      $(".hamburger-dash:nth-of-type(1)").toggleClass("rot1");
      $(".hamburger-dash:nth-of-type(2)").toggleClass("opacity");
      $(".hamburger-dash:nth-of-type(3)").toggleClass("rot2");
    });
  });


// z użyciem biblioteki

  // $(document).ready(function() {
  //   var hamburger = $("#hamburger");
  //   var navig = $("#navig");
  //
  //   hamburger.on("click", function() {
  //
  //     var opened = navig.data("opened");
  //
  //     navig.stop().transition({
  //       x: opened ? 0 : navig.outerWidth()
  //     });
  //
  //     navig.data("opened", !opened);
  //   });
  // });

})(jQuery);
