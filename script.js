const inputEl = document.getElementById("num")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-results")
const volumeEl = document.getElementById("volume-results")
const massEl = document.getElementById("mass-results")
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
    console.log(inputEl.value)
})

metersToFeet(number)
feetToMeters(number)
litersToGallons(number)
gallonsToLiters(number)
kilosToPounds(number)
poundsToKilos(number)
