const inputEl = document.getElementById("num")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-results")
const volumeEl = document.getElementById("volume-results")
const massEl = document.getElementById("mass-results")
const resultsEl = document.getElementById("results")

function metersToFeet (num) {
    let feet = (num * 3.281).toFixed(3)
    return feet
}

function feetToMeters (num) {
    let meters = (num / 3.281).toFixed(3)
    return meters
}

function litersToGallons(num) {
    let gallons = (num * 0.264).toFixed(3)
    return gallons
}

function gallonsToLiters(num) {
    let liters = (num / 0.264).toFixed(3)
    return liters
}

function kilosToPounds(num) {
    let pounds = (num * 2.204).toFixed(3)
    return pounds
}

function poundsToKilos(num) {
    let kilos = (num / 2.204).toFixed(3)
    return kilos
}

convertBtn.addEventListener("click", function(){
    let newNumber = inputEl.value
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
