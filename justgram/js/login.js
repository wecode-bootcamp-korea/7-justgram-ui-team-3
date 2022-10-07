const idInput = document.getElementsByClassName("idInput")[0];
const pwInput = document.getElementsByClassName("pwInput")[0];
const btn = document.getElementsByClassName("btn")[0];

function textInput() {
    if (!(idInput.value && pwInput.value)) {
        // console.log(idInput.value);
        btn.disabled = true;
        btn.classList.add("buttondisabled");
    } else {
        btn.disabled = false;
        btn.style.cursor = "pointer";
        btn.classList.remove("buttondisabled");
    }
}

idInput.addEventListener("keyup", textInput);
pwInput.addEventListener("keyup", textInput);
