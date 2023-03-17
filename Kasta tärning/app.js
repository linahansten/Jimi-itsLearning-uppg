const imgEl = document.querySelector("#diceSide")

function rollDice() {
    let randomNum = Math.floor(Math.random() * 6) + 1

    if (randomNum == 1) {
        console.log("1");
        imgEl.src = "./d1-removebg-preview.png"
    } else if (randomNum == 2) {
        console.log("2");
        imgEl.src = "./d2-removebg-preview.png"
    } else if (randomNum == 3) {
        console.log("3");
        imgEl.src = "./d3-removebg-preview.png"
    } else if (randomNum == 4) {
        console.log("4");
        imgEl.src = "./d4-removebg-preview.png"
    } else if (randomNum == 5) {
        console.log("5");
        imgEl.src = "./d5-removebg-preview.png"
    } else if (randomNum == 6) {
        console.log("6");
        imgEl.src = "./d6-removebg-preview.png"
    }
}