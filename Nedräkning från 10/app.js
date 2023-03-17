
let time = document.querySelector(".time")
function countdown(seconds) {
    let timer = setInterval(function () {
        seconds--
        if (seconds <= 0) {
            clearInterval(timer);
            time.innerText = "Hej på dig!"
            time.style.backgroundColor = "red"
        } else {
            console.log(seconds);
            time.innerText = seconds
        }
    }, 1000);
}
countdown(10);