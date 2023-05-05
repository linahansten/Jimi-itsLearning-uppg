
console.log(localStorage.getItem("lang"))

document.querySelectorAll("#myDropdown a").forEach(el => {
    el.addEventListener("click", select)

})

function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show")
}

function select(e) {
    localStorage.setItem("lang", e.target.textContent)
    document.getElementById("myDropdown").classList.toggle("show")
    window.location.reload()
}
function text() {
    const p = document.querySelector(".lang")
    p.textContent = "your language is " + localStorage.getItem("lang")

}
text()

