console.log("testing");
let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("form works");
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;
  let selectCountry = document.getElementById("selectCountry").value;
  let male = document.getElementById("male");
  let female = document.getElementById("female");

  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

  console.log(selectCountry);

  if (fname == "") {
    showWarning("Please enter your First Name", "fName", "fname");
    setTimeout(function () {
      removeWarning();
    }, 3500);
  }
  if (lname == "") {
    showWarning("Please enter your Last Name", "lName", "lname");
    setTimeout(function () {
      removeWarning();
    }, 3500);
  }

  if (regex.test(userEmail) != true) {
    showWarning("Please enter correct Email.", "email", "userEmail");
    setTimeout(function () {
      removeWarning();
    }, 3500);
  }

  if (userPassword.length < 6) {
    showWarning(
      "Password must be at least 6 characters long.",
      "password",
      "userPassword"
    );
    setTimeout(function () {
      removeWarning();
    }, 3500);
  }
  if (selectCountry == "") {
    showWarning("Please select your Country.", "country", "selectCountry");
    setTimeout(function () {
      removeWarning();
    }, 2500);
  }
  if (male.checked != true && female.checked != true) {
    showWarning("Please select your gender", "gender", "male");
    setTimeout(function () {
      removeWarning();
    }, 2500);
  }
});

const showWarning = (type, id, idForFocus) => {
  let warning = document.createElement("p");
  let txt = type;
  let text = document.createTextNode(txt);
  warning.setAttribute("class", "red");
  warning.setAttribute("id", "warn");
  warning.appendChild(text);
  document.getElementById(id).appendChild(warning);
  document.getElementById(idForFocus).focus();
};

function removeWarning() {
  let id = document.getElementById("warn");
  id.remove();
}
