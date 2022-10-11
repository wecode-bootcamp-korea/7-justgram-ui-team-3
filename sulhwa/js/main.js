const commentList = document.getElementsByClassName("m-box");
const commentButtonList = document.getElementsByClassName("comment-btn");
const commentInput = document.getElementsByClassName("comment-box");
const commentArray = Array.from(commentList);
const commentButtonArray = Array.from(commentButtonList);
const commentInputArray = Array.from(commentInput);

commentButtonArray.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    const input = document.getElementsByClassName("comment-box")[index];
    const commentList = document.getElementsByClassName("m-box")[index];

    updateCommentListDOM(input.value, commentList, "hi_teddyBear");
    input.value = "";
  });
});

commentInputArray.forEach((input, index) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const commentList = document.getElementsByClassName("m-box")[index];

      updateCommentListDOM(input.value, commentList, "hi_teddyBear");
      input.value = "";
    }
  });
});

function updateCommentListDOM(value, commentList, writer) {
  const commentCard = document.createElement("li");
  commentCard.classList.add("m-box");

  const commentUser = document.createElement("b");
  commentUser.classList.add("username");
  commentUser.textContent = writer;

  const commentSpan = document.createElement("span");
  commentSpan.textContent = value;

  commentCard.append(commentUser, commentSpan);
  commentList.append(commentCard);
}

function getCommentList() {
  fetch("./data/comments.json")
    .then((res) => res.json())
    .then((json) => {
      json.forEach((comment) => {
        const commentList =
          document.getElementsByClassName("m-box")[comment.feedIndex];
        updateCommentListDOM(comment.content, commentList, comment.nickname);
      });
    });
}
getCommentList();
