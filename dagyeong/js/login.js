const idInput = document.getElementsByClassName("idBox")[0];
const pwInput = document.getElementsByClassName("pwBox")[0];

const button = document.getElementsByClassName("btn")[0];

let idValue = "";
let pwValue = "";

idInput.addEventListener("input", (e) => {
  idValue = e.target.value;
  console.log(idValue, pwValue);
  console.log(button.disabled);
  console.log(button.style);
  if (idValue !== "" && pwValue !== "") {
    button.disabled = false;
    button.style.cursor = "pointer";
  } else {
    button.disabled = true;
    button.style.cursor = "not-allowed";
  }
});

pwInput.addEventListener("input", (e) => {
  pwValue = e.target.value;
  if (idValue !== "" && pwValue !== "") {
    button.disabled = false;
    button.style.cursor = "pointer";
  } else {
    button.disabled = true;
    button.style.cursor = "not-allowed";
  }
});
