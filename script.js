const inputEl = document.getElementById("num")
console.log(inputEl)
inputEl.value = 10
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    console.log(inputEl.value)
})
