// Third week
// homework no. 1

(function(){

  if(typeof String.prototype.repeatt !== "function") {
    String.prototype.repeatt = function(nb) {

      if(nb < 0) {
        throw new RangeError("Invalid nb value");
      }

      var newString="";
      for (var i=0; i<nb; i++) {
        newString+=this;
      }
      return newString;
    };

    // String.prototype.repeatt = function(nb) {
    //   var newString = [];
    //   for (var i=0; i<nb; i++) {
    //     newString.push(this);
    //   }
    //   return String(newString.join(""));
    // };

  }



  // if(typeof String.prototype.repeatt === "function") return;
  //
  // String.prototype.repeatt = function(count) {
  //   if(count < 0) {
  //     throw new RangeError("Invalid count value");
  //   }
  //
  //   return (new Array(count + 1)).join(this.toString());
  // };

  console.log("Hej ".repeatt(5));
})();
