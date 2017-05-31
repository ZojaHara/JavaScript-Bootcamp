// No. 5
// var ending = "?page=2";
// var url  = window.location.href + ending;
//
// function getPage() {
//       var endingElem = /\d+$/;
//
//       if(endingElem.test(url)) {
//         lastElem =  url.slice(url.length-1);
//         return Number(lastElem);
//       }else {
//         return null;
//       }
// }

// Z webinaru
function getPage() {
  var regex = /page=(\d+)(?:&|\b)/,
      result = window.location.search.match(regex);

      return result && result[1] ? parseInt(result[1]) : null;
}


// result[1] - is the number from the string

console.log(getPage());
