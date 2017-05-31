// Second week
// No. 3

var counting = document.querySelector(".counting"),
    startButton = document.querySelector(".startButton");


var firstValue = 10;


function countBack(callback) {

  counting.textContent = firstValue;
  if(firstValue>=0) {
    firstValue--;
    setTimeout(countBack.bind(this, callback),1000);
  }else {
    callback();
  }

}


function myFunc() {
  counting.textContent = "Odliczanie zakończone!";
  startButton.textContent = "Ponów!";
  firstValue = 10;
}

startButton.addEventListener("click", function() {
  countBack(myFunc, 11000);
  this.textContent= "";
}, false);

// function countBack(callback, timeValue) {
//
//   counting.textContent = firstValue;
//   if(firstValue>0) {
//     firstValue--;
//     setTimeout(countBack,1000);
//   }
//
//   if(typeof callback !== "function") {
//     return false;
//   }
//
//   if(callback) {
//     setTimeout(callback, timeValue);
//   }
// }
//
//
// function myFunc() {
//   counting.textContent = "Odliczanie zakończone!";
//   startButton.textContent = "";
// }
