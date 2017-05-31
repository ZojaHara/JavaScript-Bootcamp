;(function() {

// First week
// homework no. 1

  var products = 101;
  var price = 100;

  var newPrice = function(products, price) {
                        switch (true) {
                          case products>4 && products<21:
                            price*=0.95;
                            break;
                          case products>20 && products<51:
                              price*=0.90;
                              break;
                          case products>50 && products<101:
                                price*=0.85;
                                break;
                          case products>100:
                                  price*=0.80;
                                  break;
                        }
                        return price;
                };

  console.log("Podstawowa cena produktu to " + price +" a po obniżce to " + newPrice(products, price));

  // homework no. 2

  var movies = {
    "Dla dzieci": [
        "Kubuś Puchatek i Przyjaciele",
        "Zwariowane Melodie",
        "Piotruś Pan"
    ],
    "Dla młodzieży": [
        "Szkoła uczuć",
        "Podróż za jeden uśmiech",
        "Szatan z 7-ej klasy"
    ],
    "Dla dorosłych": [
        "Gwiezdne Wojny",
        "Szklana Pułapka",
        "Titanic"
    ]
};


  for(var key in movies) {
    console.log(key +":");
    for(var i=0; i<movies[key].length; i++) {
      console.log(movies[key][i]);
    }
    console.log('==========================');
  }

  // homework no. 3

function toBoolean(param) {
    return Boolean(param);
}

console.log(toBoolean(20));

// homework no. 4

function sum(arr) {
  var sumArr = 0;

  for(var j=0;j<arr.length;j++) {
    sumArr+=arr[j];
  }
  return sumArr;
}

console.log(sum([1,5,5,4]));

// homework no. 5
function getDate() {
    var d = new Date();
    var day = d.getDate();
    if(day<10) {
      day = "0" + day;
    }
    var month = d.getMonth()+1;
    if(month<10) {
      month = "0" + month;
    }
    var year = d.getFullYear();

    return day+"."+month+"."+year;
}

console.log(getDate());

})();
