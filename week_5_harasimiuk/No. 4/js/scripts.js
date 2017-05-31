(function() {

    let output = document.querySelector("#showNumbers");

    class Lotek {

      constructor(){
        this.numbers = [];
        this.getNumbers();
      }


      *[Symbol.iterator]() {
        yield * this.numbers;
      }


//     [Symbol.iterator]() {
//       let numbers = this.numbers,
//           index = 0;
//
//       return {
//         next: function() {
//           return {
//             done:(index === numbers.length ? true : false),
//             value: numbers[index++]
//           };
//         }
//       };
// }

      getRandom(min, max) {
          return Math.round(Math.random() * (max - min) + min);
      }

      getNumbers() {
            let random;

        for(let i = 0; i < 6; i++) {
            random = this.getRandom(1, 49);

            while(this.numbers.indexOf(random) !== -1) {
                random = this.getRandom(1, 49);
                // console.log("Powtórzyła się liczba " + random);
            }

            this.numbers.push(random);
        }
        output.value = this.numbers.join(", ");
      }

      checkNumbers(...args) {

          let checkedNumbers = [...args];

          let numbers = this.numbers;

          let caught = [...args].filter(arg => {
           return numbers.indexOf(arg) !== -1;
          } );
          console.log(caught);

          return {
            number: caught,
            count: caught.length
          };

        }
    }



let shot = new Lotek();
//
let myNumbers = [2, 13, 15, 22, 34, 40];
let results = shot.checkNumbers(...myNumbers);

let selector2 = document.querySelector("#showChecked");
let selector3 = document.querySelector("#repeated");

selector2.textContent = myNumbers;
selector3.textContent = results.number;
// zwraca np. { numbers: [13, 22], count: 2 }
console.log(results);
// tablica ze wszystkimi wylosowanymi liczbami
let numbers = [...shot];
console.log(numbers);

// wyświetla kolejno wylosowane liczby
for(let number of shot) {
    console.log(number);
}

})();
