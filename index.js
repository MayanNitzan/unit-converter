/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
let resultEl1 = document.getElementById("result-el-1")
let resultEl2 = document.getElementById("result-el-2")
let resultEl3 = document.getElementById("result-el-3")


btnEl.addEventListener("click", function() {
    let result1 = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`
    resultEl1.textContent = result1
    let result2 = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`
    resultEl2.textContent = result2
    let result3 = `${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos`
    resultEl3.textContent = result3
})