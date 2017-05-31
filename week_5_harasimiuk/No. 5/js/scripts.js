// No. 5

function preloadImages(urls) {


    let length = urls.length,
        counter = 0;

    let p = new Promise(function(resolve, reject) {

      urls.forEach(function(url) {
        let img = document.createElement("img");

        img.onload = function(){
          counter++;

          if(counter === length) {
              resolve(urls);
          }
        };

        img.onerror = function() {
          reject( new Error ("Zdjęcia nie mogły zostać wczytane"));
        };

        img.setAttribute("src", url);

      });
    });

    return p;
}


const urls = [
    "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg"
];

preloadImages(urls)
    .then(function(imgs) {
        console.log("Obrazy wczytane.");

        // tutaj utwórz dla każdego adresu URL
        // z przekazanej tablicy imgs element <img>
        // i wstaw je wszystkie do fragmentu dokumentu,
        // który na końcu zwrócisz, aby był dostępny
        // w kolejnym bloku .then

        let df = document.createDocumentFragment();

        for(let i =0; i<imgs.length; i++) {
          let img = document.createElement("img");
          img.setAttribute("src", imgs[i]);
          df.appendChild(img);
        }
        return df;
    })
    .then(function(docFragment) {

      document.body.appendChild(docFragment);
        // wstaw otrzymany fragment dokumentu na stronę,
        // aby wczytane obrazy się pokazały
    })
    .catch(function(err) {
        // na wypadek błędu, wyświetl komunikat w konsoli
        console.log(err.message);
    });
