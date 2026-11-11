function Next() {
    let userInput = document.getElementById('input').value
    let displayArea = document.getElementById('display')
    let currentYear = new Date().getFullYear()
    let age = currentYear - new Date(userInput).getFullYear()
    if (userInput == "") {
        displayArea.innerHTML = `<p>Please input your Date-Of-Birth</p>`
    }
    else if (age >= 18) {
        displayArea.innerHTML = `<p>You are eligible to vote</p>`
    }else {
        displayArea.innerHTML =`<p>You are not eligible to vote you have ${18 -age} more years to be eligible </p>`
    }
}

