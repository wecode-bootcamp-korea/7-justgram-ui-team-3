const postBtn = document.getElementsByClassName("postBtn"); // 버튼을 가져오고
const post = Array.from(postBtn); // 배열 생성

post.forEach((btn, index) => {
  const inputText = document.getElementsByClassName("commentInput")[index];
  const btnClick = document.getElementsByClassName("postBtn")[index];
  const commentList = document.getElementsByClassName("commentList")[index];

  function youCanClick() {
    if (!inputText.value.length) {
      btnClick.disabled = true;
      btnClick.classList.remove("btnEnable");
    } else {
      btn.disabled = false;
      btn.classList.add("btnEnable");
    }
  }
  inputText.addEventListener("input", youCanClick);

  btn.addEventListener("click", () => {
    const eachComments = document.createElement("div");
    eachComments.classList.add("eachComments");

    const userName = document.createElement("span");
    userName.textContent = "justcode7"; // 임의 작성자 - class 추가랑 순서 바꾸면 오류남 조심!!
    userName.classList.add("userName");

    const userComment = document.createElement("span");
    userComment.textContent = inputText.value;
    userComment.classList.add("userComment");

    eachComments.append(userName, userComment); // appendchild는 하나의 객체만 가능하다!!
    commentList.append(eachComments);

    inputText.value = ""; // 한바퀴 돌린 후, 인풋창 정리
    console.log("after Click, clear Input textArea");

    btnClick.disabled = "false";
    console.log("등록후, 버튼 비활성화");
    btn.classList.remove("btnEnable");
    console.log("등록후 스타일 제거");
  });
});

// 엔터키로 등록하기
const commentInput = document.getElementsByClassName("commentInput");
const postEnter = Array.from(commentInput);

postEnter.forEach((enterClick, index) => {
  const inputText = document.getElementsByClassName("commentInput")[index];
  const commentList = document.getElementsByClassName("commentList")[index];
  const btnClick = document.getElementsByClassName("postBtn")[index];

  enterClick.addEventListener("keyup", (post) => {
    if (!inputText.value.length) {
      post.preventDefault();
      console.log("엔터 안됨");
    } else if (post.keyCode == "13") {
      const eachComments = document.createElement("div");
      eachComments.classList.add("eachComments");
      console.log("확인");

      const userName = document.createElement("span");
      userName.textContent = "justcode7";
      userName.classList.add("userName");

      const userComment = document.createElement("span");
      userComment.textContent = inputText.value;
      userComment.classList.add("userComment");

      eachComments.append(userName, userComment);
      commentList.append(eachComments);

      inputText.value = ""; // 한바퀴 돌린 후, 인풋창 정리
      console.log("after Click, clear Input textArea");
      btnClick.disabled = "false";
      console.log("등록후, 버튼 비활성화");
      btnClick.classList.remove("btnEnable");
      console.log("등록후 스타일 제거");
    }
  });
});

function mokupCL() {
  fetch("./data/comments.json")
    .then((res) => res.json())
    .then((json) => {
      json.forEach((json, index) => {
        const commentList = document.getElementsByClassName("commentList")[0]; //보통 index 입력 but 추후 여기 배열자리에 특정유저의 ID값을 넣으면 해당 댓글만 모을 수 있겠군! (유저별 json파일 생성 조건)
        const eachComments = document.createElement("div");
        eachComments.classList.add("eachComments");

        const userName = document.createElement("span");
        userName.textContent = json.userName;
        userName.classList.add("userName");

        const userComment = document.createElement("span");
        userComment.textContent = json.userComment;
        userComment.classList.add("userComment");

        eachComments.append(userName, userComment);
        commentList.append(eachComments);
      });
    });
}

mokupCL();
