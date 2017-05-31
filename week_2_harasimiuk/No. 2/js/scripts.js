// Second week

// No. 2

function Validation(form) {
  this.form = form;
  this.fields = form.querySelectorAll("[data-error]");

  this.form.addEventListener("submit", this.validate.bind(this), false);
}

Validation.prototype.notEmpty = function (field) {
  return field.value !=="";
};
Validation.prototype.isEmail = function (field) {
  return field.value.indexOf("@")!== -1;
};
Validation.prototype.isNumber = function(field) {
  var newNumber = parseInt(field.value);
  return !(isNaN(newNumber)) && field.value == newNumber;
};


Validation.prototype.validate = function(e) {
    e.preventDefault();

    this.errors = [];
      this.isValid = false;

    for(var i =0; i<this.fields.length; i++) {
      this.field = this.fields[i];

      if (this.field.type === "text" || this.field.type === "textarea") {
        this.isValid = this.notEmpty(this.field);
      }else if (this.field.type === "email") {
        this.isValid = this.isEmail(this.field);
      }else if (this.field.type === "number") {
        this.isValid = this.isNumber(this.field);
      }

      if(!this.isValid) {
        this.errors.push(this.field.dataset.error);
        this.field.classList.add("warning");
        this.field.previousElementSibling.textContent = this.field.dataset.error;
      }else {
        this.field.classList.remove("warning");
        this.field.previousElementSibling.textContent = "";
      }
    }

      if(this.errors.length<1) {
        this.form.submit();
      }
};



// var form = document.querySelector("#form");
// var fields = document.querySelectorAll("[data-error]");
//
// function notEmpty(field) {
//   return field.value !=="";
// }
// function isEmail(field) {
//   return field.value.indexOf("@")!== -1;
// }
// function isNumber(field) {
//   var newNumber = parseInt(field.value);
//   return !(isNaN(newNumber)) && field.value == newNumber;
// }
//
//
// function validateForm(e) {
//
//   e.preventDefault();
//
//   var errors = [],
//       isValid = false;
//
//   for(var i =0; i<fields.length; i++) {
//     var field = fields[i];
//
//     if (field.type === "text" || field.type === "textarea") {
//       isValid = notEmpty(field);
//     }else if (field.type === "email") {
//       isValid = isEmail(field);
//     }else if (field.type === "number") {
//       isValid = isNumber(field);
//     }
//
//     if(!isValid) {
//       errors.push(field.dataset.error);
//       field.classList.add("warning");
//       field.previousElementSibling.textContent = field.dataset.error;
//     }else {
//       field.classList.remove("warning");
//       field.previousElementSibling.textContent = "";
//     }
//   }
//
//     if(errors.length<1) {
//       form.submit();
//     }
//
// }
//
// form.addEventListener("submit", validateForm, false);

var form1 = new Validation(document.querySelector("#form"));
var form2 = new Validation(document.querySelector("#form2"));
