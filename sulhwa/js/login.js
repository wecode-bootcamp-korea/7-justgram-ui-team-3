const id = document.getElementById("user");
const pwd = document.getElementById("password");
const loginButton = document.getElementsByClassName("login-btn")[0];

let idValue = "";
let pwValue = "";

id.addEventListener("input", (e) => {
  idValue = e.target.value;

  updateLoginButtonDOM();
});

pwd.addEventListener("input", (e) => {
  pwValue = e.target.value;

  updateLoginButtonDOM();
});

function updateLoginButtonDOM() {
  if (idValue.length < 0 && pwValue.length < 0) {
    loginButton.disabled = true;
    loginButton.style.cursor = "not-allowed";
  } else {
    loginButton.disabled = false;
    loginButton.style.cursor = "pointer";
    loginButton.style.backgroundColor = "blue";
  }
}
