//comment 버튼클릭 이벤트
const commentList = document.getElementsByClassName("sentence"); // array로 들어옴
const commentButtonList = document.getElementsByClassName(
  "feed-comment-input-button"
); // array로 들어옴

console.log(commentList);

const commentArray = Array.from(commentList); // list를 array로 치환
console.log(commentArray);
const commentButtonArray = Array.from(commentButtonList);

commentButtonArray.forEach((button, index) => {
  button.addEventListener("click", () => {
    const input = document.getElementsByClassName("feed-comment-input")[index]; // 0번째 버튼을 누르면 0번째의 comment-input을 등록
    const commentList = document.getElementsByClassName("sentence")[index]; // list 요소(class="sentence")에 자식요소 child를 넣어준다.

    const commentCard = document.createElement("div");
    commentCard.classList.add("feed-comment-card");

    const nickname = document.createElement("span");
    nickname.classList.add("highlight");
    nickname.textContent = "database55";

    const contentSpan = document.createElement("span");
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
