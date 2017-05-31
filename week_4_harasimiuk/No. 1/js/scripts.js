// Fourth week
// homework no. 1

(function($) {

  $(document).ready(function() {
    // $("div.grid.grid-12");
    $(".grid").filter(".grid-12").css("background", "rgb(200,200,200)");

    $("nav a[href^='http']").text("Spełniający kryteria");

    $("[type='checkbox'], [type='radio']").not(":checked").css("display", "block");

    $("#text p:empty").first().css("background","rgb(200,180,210)");

    $(".pagination-item").not("span").css("background","rgb(250,210,210)");


  });

})(jQuery);
