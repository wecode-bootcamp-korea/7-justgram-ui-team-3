let loginButton = document.getElementsByClassName("blue-button")[0];
let id = document.getElementsByClassName("login")[0];
let pw = document.getElementsByClassName("login")[1];

function 버튼활성화() {
  let idValue = document.getElementsByClassName("login")[0].value;
  let pwValue = document.getElementsByClassName("login")[1].value;
  if (idValue.length > 4 && pwValue.length > 4) {
    loginButton.style.backgroundColor = "rgb(0 149 246)";
    loginButton.disabled = false;
  } else {
    loginButton.style.backgroundColor = "rgb(197 225 251)";
    loginButton.disabled = true;
  }
}

id.addEventListener("input", 버튼활성화);
pw.addEventListener("input", 버튼활성화);
