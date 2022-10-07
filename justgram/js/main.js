const input = document.getElementsByClassName("input");
const btn = document.getElementsByClassName("btn");
const maindiv = document.getElementsByClassName("hidden");
const commenter = ["dmsrud55", "hi__", "hellow~", "rullru"];

const hiddenArray = Array.from(maindiv);
const btnArray = Array.from(btn);
const inputArray = Array.from(input);
// Array.from(변수 이름) => 각각의 배열로 바꿔줌

btnArray.forEach((button, index) => {
    button.addEventListener("click", function () {
        const div = document.createElement("div");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        const input = document.getElementsByClassName("input")[index];
        const maindiv = document.getElementsByClassName("hidden")[index];
        span1.setAttribute("class", "spancss");
        div.appendChild(span1);
        div.appendChild(span2);

        let random = commenter[Math.floor(Math.random() * commenter.length)];
        span1.innerHTML = random;
        span2.innerHTML = input.value;

        maindiv.appendChild(div);
    });
});
// input.addEventListener("keyup", function () {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         writeComment();
//     }
// });
inputArray.forEach((enter, index) => {
    enter.addEventListener("keyup", function enterKey() {
        if (window.event.keyCode == "13") {
            const div = document.createElement("div");
            const span1 = document.createElement("span");
            const span2 = document.createElement("span");
            const input = document.getElementsByClassName("input")[index];
            const maindiv = document.getElementsByClassName("hidden")[index];
            span1.setAttribute("class", "spancss");
            div.appendChild(span1);
            div.appendChild(span2);

            let random =
                commenter[Math.floor(Math.random() * commenter.length)];
            span1.innerHTML = random;
            span2.innerHTML = input.value;

            maindiv.appendChild(div);
        }
    });
});

// console.log(writeComment());
// writeComment함수를 addEventListener로 받아서 enter이벤트 등록
// 피드 4개가 있으므로 forEach메소드 활용

// writeComment함수를 addEventListener로 받아서 클릭이벤트 등록
