const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const number = document.querySelector(".number")
console.log(number)

let count = localStorage.getItem('count') || 0
number.textContent = count

minus.addEventListener("click", function () {
    let subtraction = Number(number.textContent) - 1
    number.textContent = subtraction
    count = Number(number.textContent)
    localStorage.setItem('count', count.toString())
    console.log(minus)
})

plus.addEventListener("click", function () {
    let multiplication = Number(number.textContent) + 1
    number.textContent = multiplication
    count = Number(number.textContent)
    localStorage.setItem('count', count.toString())
    console.log(plus)
})
