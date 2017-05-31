// Third week

// No. 2
var elem = new Toggler("#section");
var button = document.querySelector("#button");


function Toggler(elem) {
  if(!(this instanceof Toggler)) {
    return new Toggler(elem);
  }
  this._elem = document.querySelector(elem);
}
Toggler.prototype.getElem = function() {
  return this._elem;
};
Toggler.prototype.hide = function() {
  return this._elem.style.display = "none";
};
Toggler.prototype.show = function() {
  return this._elem.style.display = "block";
};

button.addEventListener("click", function() {
  
    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);
