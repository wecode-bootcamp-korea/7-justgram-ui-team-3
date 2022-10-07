const commentList = document.getElementsByClassName("m-box");
const commentButtonList = document.getElementsByClassName("comment-btn");
const commentInput = document.getElementsByClassName("comment-box")
const commentArray = Array.from(commentList);
const commentButtonArray = Array.from(commentButtonList);
const commentInputArray = Array.from(commentInput);

commentButtonArray.forEach((button, index)=>{
    button.addEventListener("click", (event) => {
        const input=document.getElementsByClassName("comment-box")[index];
        const commentList = document.getElementsByClassName("m-box")[index];

        const commentCard = document.createElement("li");
        commentCard.classList.add("m-box");

        const commentUser = document.createElement("b");
        commentUser.classList.add("username");
        commentUser.textContent="hi_teddyBear";

        const commentSpan = document.createElement("span");
        commentSpan.textContent = input.value;

        commentCard.append(commentUser, commentSpan);
        commentList.append(commentCard);
        input.value=" ";
        
    });
});

commentInputArray.forEach((input, index)=>{
    input.addEventListener("keypress", function (e) {
        if(input.value === " "){
            e.defaultPrevented();
        }   else if (e.key === "Enter") {
                const input=document.getElementsByClassName("comment-box")[index];
                const commentList = document.getElementsByClassName("m-box")[index];

                const commentCard = document.createElement("li");
                commentCard.classList.add("m-box");

                const commentUser = document.createElement("b");
                commentUser.classList.add("username");
                commentUser.textContent="hi_teddyBear";

                const commentSpan = document.createElement("span");
                commentSpan.textContent = input.value;

                commentCard.append(commentUser, commentSpan);
                commentList.append(commentCard);
                input.value=" ";
        }
    });
});