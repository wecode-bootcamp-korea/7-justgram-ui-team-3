//comment 버튼클릭 이벤트
const commentList = document.querySelector(".sentence"); // array로 들어옴
const commentButtonList = document.querySelector(".feed-comment-input-button"); // array로 들어옴

console.log(commentList);
console.log(commentButtonList);

const commentArray = Array.from(commentList); // list를 array로 치환
const commentButtonArray = Array.from(commentButtonList);

console.log(commentArray);
console.log(commentButtonArray);

commentButtonArray.forEach((button, index) => {
  button.addEventListener("click", () => {
    const input = document.getElementsByClassName("feed-comment-input")[index];
    const commentList = document.getElementsByClassName("sentence")[index];

    const commentCard = document.createElement("div");
    commentCard.classList.add("sentence");

    const nickname = document.createElement("p");
    nickname.classList.add("highlight");
    nickname.textContent = "database55";

    const contentSpan = document.createElement("p");
    contentSpan.textContent = input.value;

    commentCard.append(nickname, contentSpan);
    commentList.append(commentCard);
  });
});

// fetch(".//data/commentList.json")
//   .then((res) => res.json())
//   .then((json) => {
//     console.log(json);
//     json.array.forEach((Comment) => {
//       const commentList = document.createElement("div");
//     });
//   }); // res.json을 내보내주는 틀
