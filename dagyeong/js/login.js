const idBox = document.getElementsByClassName("idBox");
const pwBox = document.getElementsByClassName("pwBox");

const button = document.getElementsByClassName(".btn");

pwBox.addEventListener("keyup", activeEvent);
idBox.addEventListener("keyup", activeEvent);
// button.addEventListener("keyup", activeEvent);

button.addEventListener("keyup", function (e) {
  console.log(e);
});
