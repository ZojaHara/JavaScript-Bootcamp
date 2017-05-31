
(function(){

  if(typeof Array.myFrom === "function") return;

  Array.myFrom = function(args, fn, context) {
    var trueArray = [];

    if(args == null) {
      throw new Error("The parameter is not array-like");
    }

    if(!("length" in args)) {
      return trueArray;
    }
    trueArray =  Array.prototype.slice.call(args);

    if(typeof fn === "function") {
      trueArray = trueArray.map(fn, context);
    }

    return trueArray;

  };


  var lis = document.querySelectorAll("ul li");

  var lisArr = Array.myFrom(lis);
  console.log(lisArr);

  console.log( Array.isArray(lisArr) );

  var lisTexts = Array.myFrom(lis, function(li) {
      return li.textContent;
  });
  console.log(lisTexts);


})();
