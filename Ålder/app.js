const inputElement = document.querySelector("input");
const divElement = document.querySelector("div");
const pElement = document.querySelector("p")


inputElement.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        if (inputElement.value <= 0) {
            pElement.innerText = "Ange en gilitg ålder"
        } else if (inputElement.value <= 12) {
            pElement.innerText = "Du är ett barn"
        } else if (inputElement.value >= 13 && inputElement.value <= 19) {
            pElement.innerText = "Du är en tonåring"
        } else if (inputElement.value >= 20 && inputElement.value <= 64) {
            pElement.innerText = "Du är en vuxen"
        } else if (inputElement.value >= 65 && inputElement.value <= 1000) {
            pElement.innerText = "Du är en senior"
        }
    }
})



