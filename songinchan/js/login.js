// 2차 리팩토링 (버튼 클릭 활성화여부에 따른 CSS처리를 ID로 부여)

const idInput = document.getElementById("userInput");
const pwInput = document.getElementById("pwInput");
const btn = document.getElementById("loginBtn");

function clickEnable() {
  if ((idInput.value.length && pwInput.value.length) !== 0) {
    console.log("disabled is false");
    btn.disabled = false;
    btn.setAttribute("class", "btnEnable");
  } else {
    console.log("disabled is true");
    btn.disabled = true;
    btn.setAttribute("class", "btnDisable");
  }
}

idInput.addEventListener("input", clickEnable); // 이벤트를 keyup에서 input으로 변경
pwInput.addEventListener("input", clickEnable); // 이벤트를 keyup에서 input으로 변경

// 클릭 가능 & 불가능 복귀되는지 확인용 함수
function btnCheck() {
  alert("어서 오세요! 🤗");
}
btn.addEventListener("click", btnCheck);
