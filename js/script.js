let originalString = "I love my country paskistan. <br> I like my city faisalabad. <br> I love my homeland."

let cities = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta"]

// ---------------------------------------------------------------------------------------------------------------

// convert to lowercase 
const lowercase = () => {
    let lowercase = originalString.toLowerCase()
    document.getElementById("output").innerHTML = lowercase
}

// convert to uppercase 
const uppercase = () => {
    let uppercase = originalString.toUpperCase()
    document.getElementById("output").innerHTML = uppercase
}

// convert to capitalize 
const capitalize = () => {
    let capitalize = `<span class='text-capitalize'> ${originalString} </span>`
    document.getElementById("output").innerHTML = capitalize
}

// better formatting 
const betterFormatting = () => {
    let word = document.getElementById("inputField").value
    if (word.length < 3) {
        alert("please enter a word correctly")
        return
    }
    let wordFirstLetter = word.charAt(0).toUpperCase();
    let wordAllLetters = word.slice(1).toLowerCase();
    let betterFormatting = `${wordFirstLetter}${wordAllLetters}`
    document.getElementById('output').innerHTML = betterFormatting
}

// print all cities 
const printCities = () => {
    document.getElementById("output").innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += `${i + 1}) ${cities[i]} <br>`
    }
}

// add city in list 
const addCity = () => {
    let city = document.getElementById("inputField").value;
    if (!city) {
        alert("please add city name correctly")
        return;
    }
    let newCityFirstLetter = city.charAt(0).toUpperCase();
    let newCityAllLetters = city.slice(1).toLowerCase();
    let newCityInCapitalize = `${newCityFirstLetter}${newCityAllLetters}`

    let isCityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (newCityInCapitalize === cities[i])
            isCityFound = true;
        document.getElementById("output").innerHTML = `<span class='text-danger'>&quot;${newCityInCapitalize}&quot;</span> is already in cities list`
    }

    if (isCityFound === false) {
        cities.push(newCityInCapitalize)
        document.getElementById("output").innerHTML = `<span class='text-success'>&quot;${newCityInCapitalize}&quot;</span> has been successfully added into the list`
        const printCities = () => {
            document.getElementById("output").innerHTML = ""
            for (let i = 0; i < cities.length; i++) {
                document.getElementById("output").innerHTML += `${i + 1}) ${cities[i]}`
            }
        }
    }

}

// check city in list 
const checkCity = () => {
    let checkCity = document.getElementById("inputField").value;
    if (!checkCity) {
        alert("please enter city name correctly")
        return;
    }
    let checkCityFirstLetter = checkCity.charAt(0).toUpperCase();
    let checkCityAllLetters = checkCity.slice(1).toLowerCase();
    let checkCityInCapitalize = `${checkCityFirstLetter}${checkCityAllLetters}`
    let isCheckCityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (checkCityInCapitalize === cities[i]) {
            isCheckCityFound = true;
            document.getElementById("output").innerHTML = `<span class='text-success fw-bold'>&quot;${checkCityInCapitalize}&quot;</span> is already in cities list`
        }
    }
    if (isCheckCityFound === false) {
        document.getElementById("output").innerHTML = `Sorry we couldn't found your city <span class='text-danger fw-bold'>${checkCityInCapitalize}</span> in the list`
    }
}

// find word in text 
const findWord = () => {
    let word = document.getElementById("inputField").value;
    if (!word) {
        alert("please enter word correctly")
        return;
    }
    word = word.toLowerCase();
    let newOriginalString = originalString.toLowerCase()
    let findWord = newOriginalString.indexOf(word)
    if (findWord !== -1) {
        document.getElementById("output").innerHTML = `the word you entered is found at index: ${findWord}`
    } else {
        document.getElementById("output").innerHTML = `the word you entered is not found`
    }
}

// replace word 
const replaceWord = () => {
    let currentWord = document.getElementById("inputField").value;
    if (!currentWord) {
        alert("please enter a word correctly")
        return;
    }
    let newWord = prompt("please enter new word")
    if (!newWord) {
        alert("please enter a new word correctly")
        return;
    }
    currentWord = currentWord.toLowerCase();
    newWord = newWord.toLowerCase();
    let newOriginalString = originalString.toLowerCase()
    currentWord = new RegExp(currentWord, "g")
    let replaceWord = newOriginalString.replace(currentWord, newWord)
    document.getElementById("output").innerHTML = replaceWord ;

}


// clear output box 
const clearOutput = () => {
    document.getElementById("output").innerHTML = ""
}

// clear input field 
const clearInput=()=>{
    document.getElementById("inputField").value = ""
}
