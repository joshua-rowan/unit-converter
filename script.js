const inputEl = document.getElementById("num")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-results")
const volumeEl = document.getElementById("volume-results")
const massEl = document.getElementById("mass-results")
const resultsEl = document.getElementById("results")
// inputEl.value = 25
const number = inputEl.value

lengthEl.innerHTML = `${inputEl.value} Meters to ${metersToFeet(number)} Feet | ${inputEl.value} Feet to Meters`
volumeEl.innerHTML = `${inputEl.value} Liters to Gallons | ${inputEl.value} Gallons to Liters`
massEl.innerHTML = `${inputEl.value} Kilos to Pounds | ${inputEl.value} Pounds to Kilos`

function metersToFeet (num) {
    let feet = (num * 3.281).toFixed(3)
    console.log(feet)
    return feet
}

function feetToMeters (num) {
    let meters = (num / 3.281).toFixed(3)
    console.log(meters)
    return meters
}

function litersToGallons(num) {
    let gallons = (num * 0.264).toFixed(3)
    console.log(gallons)
    return gallons
}

function gallonsToLiters(num) {
    let liters = (num / 0.264).toFixed(3)
    console.log(liters)
    return liters
}

function kilosToPounds(num) {
    let pounds = (num * 2.204).toFixed(3)
    console.log(pounds)
    return pounds
}

function poundsToKilos(num) {
    let kilos = (num / 2.204).toFixed(3)
    console.log(kilos)
    return kilos
}

convertBtn.addEventListener("click", function(){
    let newNumber = inputEl.value
    console.log(newNumber)
    resultsEl.innerHTML = `<div id="results">
    <div class="result-div">
        <h2>Length (Meter/Feet)</h2>
        <p id="length-results"id="length-results"> ${newNumber} meters to ${metersToFeet(newNumber)} feet | ${newNumber} feet to ${feetToMeters(newNumber)} meters</p>
    </div>
    <div class="result-div">
        <h2>Volume (Liters/Gallons)</h2>
        <p id="volume-results">${newNumber} liters to ${litersToGallons(newNumber)} gallons | ${newNumber} gallons to ${gallonsToLiters(newNumber)} liters</p>
    </div>
    <div class="result-div" >
        <h2>Mass (Kilograms/Pounds)</h2>
        <p id="mass-results">${newNumber} kilos to ${kilosToPounds(newNumber)} pounds | ${newNumber} pounds to ${poundsToKilos(newNumber)} kilos</p>
    </div>`
})
