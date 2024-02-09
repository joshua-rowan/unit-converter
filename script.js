const inputEl = document.getElementById("num")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-results")
const volumeEl = document.getElementById("volume-results")
const massEl = document.getElementById("mass-results")
inputEl.value = 23

lengthEl.innerHTML = `${inputEl.value} Meters to Feet | ${inputEl.value} Feet to Meters`
volumeEl.innerHTML = `${inputEl.value} Liters to Gallons | ${inputEl.value} Gallons to Liters`
massEl.innerHTML = `${inputEl.value} Kilos to Pounds | ${inputEl.value} Pounds to Kilos`

convertBtn.addEventListener("click", function(){
    console.log(inputEl.value)
})


