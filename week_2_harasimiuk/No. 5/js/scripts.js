// No. 5

(function() {

    function debounce(fn, time) {
        // docelowo powinna być wywoływana
        // funkcja fn w ten sposób fn()

        // część kodu tutaj
        var timeout = null;

        return function() {
            // pozostały kod tutaj
            var context = this;
            var args = arguments;
            var f2 = function(){
              fn.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(f2, time);
          };
        }

    var handleScroll = debounce(function() {
        console.log("Scrollujemy!");
    }, 200);

    // w tym miejscu pod handleScroll
    // powinna być nowa funkcja

    // Przypisanie zdarzenia "scroll"
    window.addEventListener("scroll", handleScroll, false);

    // Możesz również przetestować funkcję
    // ze zdarzeniem "resize" skalując okno
    var handleResize = debounce(function() {
        console.log("Zmieniamy rozmiar okna!");
    }, 100);

    window.addEventListener("resize", handleResize, false);

})();
