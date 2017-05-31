// Fourth week
// homework no. 5

// Tutaj stwórz kod całego pluginu


(function($, window, document, undefined) {

  var defaults = {
    selector: "h2",
    elemClass: "toc"
  };

    (function($, window, document, undefined) {

        $.fn.toc = function(userOptions) {

          var options = $.extend({}, defaults, userOptions);

          var divToc = $("<div><h2>Spis treści</h2></div>").addClass(options.elemClass),
              list = $("<ul></ul>").appendTo(divToc);
          divToc.insertBefore(this[0]);

          return this.each(function(index) {

            var that = $(this),
                heading = that.find(options.selector),
                li = $("<li></li>"),
                link = $("<a></a>");
                // var sectionId = "section-" + (index+1);

                // that.attr("id", sectionId);
                // link.attr("href", "#"+sectionId);
                link.text(++index + ". " + heading.text());

                list.append(li.append(link));


                link.on("click", function(e) {
                  e.preventDefault();
                  $("body, html").animate({
                    scrollTop:that.position().top
                  }, 500);
                });

          });
        };

    })(jQuery, window, document);

})(jQuery, window, document);
