// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

////////////////////////////////

function saveContact() {
  if (typeof Storage !== "undefined") {
    // Store
    let setContact = [];
    setContact[0] = document.getElementById("fullname-input").value;
    localStorage.setItem("contact", JSON.stringify(setContact));

    setContact[1] = document.getElementById("email-input").value;
    localStorage.setItem("contact", JSON.stringify(setContact));

    setContact[2] = document.getElementById("phonenumber-input").value;
    localStorage.setItem("contact", JSON.stringify(setContact));

    setContact[3] = document.getElementById("national-input").value;
    localStorage.setItem("contact", JSON.stringify(setContact));

    setContact[4] = document.getElementById("message-input").value;
    localStorage.setItem("contact", JSON.stringify(setContact));

    // consle.log(document.getElementById("fullname-review").innerHTML = JSON.parse(localStorage.getItem("contact")))
    // document.getElementById("email-review").innerHTML = JSON.parse(localStorage.getItem("contact"));
    // document.getElementById("phone-review").innerHTML = JSON.parse(localStorage.getItem("contact"));
    // document.getElementById("national-review").innerHTML = JSON.parse(localStorage.getItem("contact"));
    // document.getElementById("msg-review").innerHTML = JSON.parse(localStorage.getItem("contact"));
  }
}

function getContact() {
  // Retrieve
  let getContact = JSON.parse(localStorage.getItem("contact"));
  document.getElementById("fullname-review").innerHTML = getContact[0]
  document.getElementById("email-review").innerHTML = getContact[1]
  document.getElementById("phone-review").innerHTML = getContact[2]
  document.getElementById("national-review").innerHTML = getContact[3]
  document.getElementById("msg-review").innerHTML = getContact[4]

}
