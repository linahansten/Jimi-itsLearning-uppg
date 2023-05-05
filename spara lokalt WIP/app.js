function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show")
}

function select() {
    console.log(event.target.textContent)
    const dropdowns = document.querySelectorAll(".dropdown-content a")
    for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i]
        if (openDropdown.textContent == "svenska") {
            console.log("svenska")
        } else if (openDropdown.textContent == "suomi") {
            console.log("suomi")
        } else if (openDropdown.textContent == "english") {
            console.log("english")
        }

        if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show")
        }
    }
}

