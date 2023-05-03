const inputElement = document.querySelector("input");
const divElement = document.querySelector("div");
const pElement = document.querySelector("p")

inputElement.addEventListener("change", () => {
    const result = computeAge(inputElement.value);
    divElement.innerHTML = `
    Du är ${result.years} år och ${result.days} dagar gammal
  `

    /**
     * @param {string} dateOfBirth 
     * @returns {{years: number, days: number}}
     */
    function computeAge(dateOfBirth) {
        const now = new Date();
        const birtdate = new Date(dateOfBirth);

        if ((now.getMonth() > birtdate.getMonth()) || (now.getMonth() === birtdate.getMonth() && now.getDate() >= birtdate.getDate())) {
            const thisYearBirtDate = new Date(`${now.getFullYear()}-${birtdate.getMonth() + 1}-${birtdate.getDate()}`);

            return {
                years: now.getFullYear() - birtdate.getFullYear(),
                days: Math.floor((now.getTime() - thisYearBirtDate.getTime()) / (1000 * 60 * 60 * 24))
            };
        }
        else {
            const lastYearBirtDate = new Date(`${now.getFullYear() - 1}-${birtdate.getMonth() + 1}-${birtdate.getDate()}`);

            return {
                years: now.getFullYear() - birtdate.getFullYear() - 1,
                days: Math.floor((now.getTime() - lastYearBirtDate.getTime()) / (1000 * 60 * 60 * 24))
            }
        }
    }

    if (result.years < 0) {
        pElement.innerText = "Ange en gilitg ålder"
    } else if (result.years < 12) {
        pElement.innerText = "Du är ett barn"
    } else if (result.years >= 13 && result.years <= 19) {
        pElement.innerText = "Du är en tonåring"
    } else if (result.years >= 20 && result.years <= 64) {
        pElement.innerText = "Du är en vuxen"
    } else if (result.years >= 65 && result.years <= 1000) {
        pElement.innerText = "Du är en senior"
    }
})


