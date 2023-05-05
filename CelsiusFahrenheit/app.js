const result = document.querySelector(".result")
const Fahrenheit = document.querySelector(".Fahrenheit")
const Celsius = document.querySelector(".celsius")

function convert() {
    const inputValue = parseInt(document.querySelector(".value").value)

    if (Celsius.checked) {
        let CelsiusValue = inputValue * 9 / 5 + 32
        result.innerText = `${CelsiusValue} Fahrenheit`
    } else if (Fahrenheit.checked) {
        let FahrenheitValue = (inputValue - 32) * 5 / 9
        result.innerText = `${FahrenheitValue} Celsius`
    }
}