let sten = document.querySelector(".sten")
let sax = document.querySelector(".sax")
let påse = document.querySelector(".påse")
let result = document.querySelector(".result")
let Robot = document.querySelector(".robotAnwser")
let p1 = document.querySelector(".pAnwser")

let video = document.querySelector(".video")

function robotHands() {
    random = Math.floor((Math.random() * 3) + 1)
    if (random == 1) {
        Robot.innerText = "sten"
    } else if (random == 2) {
        Robot.innerText = "sax"
    } else {
        Robot.innerText = "påse"
    }
}



sten.addEventListener("click", () => {
    p1.innerText = "sten"
    robotHands()
    results()
})

sax.addEventListener("click", () => {
    p1.innerText = "sax"
    robotHands()
    results()
})

påse.addEventListener("click", () => {
    p1.innerText = "påse"
    robotHands()
    results()
})

function results() {
    if (Robot.innerText == "sten" && p1.innerText == "sten") {
        result.innerText = "Draw"
    } else if (Robot.innerText == "sten" && p1.innerText == "sax") {
        result.innerText = "Robot won!"
    } else if (Robot.innerText == "sten" && p1.innerText == "påse") {
        result.innerText = "Player won!"
    } else if (Robot.innerText == "sax" && p1.innerText == "sten") {
        result.innerText = "Player won!"
    } else if (Robot.innerText == "sax" && p1.innerText == "sax") {
        result.innerText = "Draw"
    } else if (Robot.innerText == "sax" && p1.innerText == "påse") {
        result.innerText = "Robot won!"
    } else if (Robot.innerText == "påse" && p1.innerText == "sten") {
        result.innerText = "Robot won!"
    } else if (Robot.innerText == "påse" && p1.innerText == "sax") {
        result.innerText = "Player won!"
    } else if (Robot.innerText == "påse" && p1.innerText == "påse") {
        result.innerText = "Draw"
    }
}
function playVid() {
    video.play()
}