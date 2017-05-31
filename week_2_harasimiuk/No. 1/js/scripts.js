// Second week
// homework no. 1

var elem = document.querySelector(".element");
var button = document.querySelector(".button");

button.addEventListener("click", function() {
  elem.classList.toggle("hidden");
  if(elem.classList.contains("hidden")) {
    button.textContent="Pokaż treść";
  }else {
    button.textContent="Ukryj treść";
  }

}, false);
