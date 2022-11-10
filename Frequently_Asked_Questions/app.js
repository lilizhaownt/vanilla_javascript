//get all elements with class question
let showAns = document.getElementsByClassName('question');

//add function to each question button
for (let i = 0; i < showAns.length; i++){
    showAns[i].addEventListener('click', function () {
        this.classList.toggle('active');

        let ans = this.nextElementSibling;
        
        if (ans.style.maxHeight) {
            ans.style.maxHeight = null;
        } else {
            ans.style.maxHeight = ans.scrollHeight + "px";
        }
    })
}

/**function to control chatbox */
let chatNow = document.getElementById('chat').style;

function openChat() {
    chatNow.display = "block";
}

function closeChat() {
    chatNow.display = "none";
}