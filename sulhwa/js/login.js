const id=document.getElementById("user"),
    pwd=document.getElementById("password"),
    loginBtn = document.getElementById("login-btn");

//아이디,비밀번호 둘다 작성 시 로그인 버튼 활성화 (블루컬러)
function button()   {
    switch (!(id.value && pwd.value)) {
        case true: loginBtn.disabled = true; break;
        case false: loginBtn.disabled = false , loginBtn.style.backgroundColor="#5394f3"; break;
    }
}

//로그인버튼 클릭 시 메인화면으로 넘어가는 이벤트
function clickButton(){
    location.href ="/main.html";
}


id.addEventListener('keyup', button);
pwd.addEventListener('keyup', button);
loginBtn.addEventListener('click', clickButton);
