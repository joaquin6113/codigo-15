const containerInputBill = document.querySelector("#container-input-bill")
const containerPercentage = document.querySelector("#container-percentage")
const containerInputPeople = document.querySelector("#container-input-people")
const tipAmount = document.querySelector("#tip-amount")
const total = document.querySelector("#total")
const button = document.querySelector("#button")
const secondButton = document.querySelector("#second-button")

let valuePercentage = 0
let currentSelect = null

function setFocusInput(element) {
    element.children[1].focus()
}

function pressedDown(element) {
    element.classList.remove("bg-green-200")
    element.classList.add("bg-[#00494d]")
}

function setButtonSelect(element) {
    const inputCustom = document.querySelector("input[name='custom']")
    const spanCurrentValue = currentSelect?.children[0].textContent
    const spanValue = element.children[0].textContent  
    
    if (inputCustom?.value) inputCustom.value = ""     // Cuando se inicia la
                                                       // página, currentSelect
    if (currentSelect) /*{*/ pressedDown(currentSelect)// vale null, por eso su-
    //currentSelect.classList.remove("bg-green-200")   // cede lo de abajo. Luego,
    //currentSelect.classList.add("bg-[#00494d]")      // currentSelect se iguala
    //}                                                // a element (el div) 
    // element.classList.remove("bg-[#00494d]")        // al pasar al siguiente       
    // element.classList.add("bg-green-200")           // su valor sí existirá.                                             
                                                       // Por eso sucede el if   
    if (spanValue === spanCurrentValue) {
        pressedDown(currentSelect)
        currentSelect = null
        valuePercentage = 0
    } else {
        element.classList.remove("bg-[#00494d]")
        element.classList.add("bg-green-200")
        currentSelect = element
        valuePercentage = Number(spanValue.replace("%", ""))
    }
}

function renderItemPercentage(per) {
    return `<div 
                onclick="setButtonSelect(this)" 
                class="bg-[#00494d] cursor-pointer text-white font-semibold text-xl rounded-md p-2 text-center">
                <span>${per}</span>
            </div>`
} 

function renderInput(icon, placeholder, name) {
    return `<div 
            class="flex items-center p-2 rounded-md bg-green-100/50 cursor-text"
            onclick="setFocusInput(this)">
                <img src="${icon}" alt="">
                <input
                id="input-bill" 
                type="text" 
                name="${name}"
                placeholder="${placeholder}" 
                class="w-full text-right outline-none bg-transparent text-green-900 text-xl font-semibold">
            </div>`
}

function generatePercentageList() {
    const percentage = ["5%", "10%", "15%", "25%", "50%"]

    percentage.forEach((value) => {
        containerPercentage.innerHTML += renderItemPercentage(value)
    })

    containerPercentage.innerHTML += renderInput("", "Custom", "custom")
}

generatePercentageList()
const inputCustom = document.querySelector("input[name='custom']")

containerInputBill.innerHTML = renderInput(
    "./assets/icon-dollar.svg", 
    "0.00", 
    "input-bill")

containerInputPeople.innerHTML = renderInput(
    "./assets/icon-person.svg",
    "0",
    "input-people")

inputCustom.onkeyup = function (e) {
    valuePercentage = Number(e.target.value)
    if (currentSelect) {
        pressedDown(currentSelect)
        currentSelect = null
    }
}

const inputBill = document.querySelector("input[name='input-bill']")
const inputPeople = document.querySelector("input[name='input-people']")



button.onclick = function () {
    const inputBillValue = Number(inputBill.value)
    const inputPeopleValue = Number(inputPeople.value)
    const tipValue = inputBillValue * valuePercentage / 100
    const billTip = [tipValue, tipValue / inputPeopleValue]
    const result = [inputBillValue + tipValue, inputBillValue / inputPeopleValue + tipValue / inputPeopleValue]

    const finalCost = (i) => {
        tipAmount.textContent = `$${billTip[i].toFixed(2)}`
        total.textContent = `$${result[i].toFixed(2)}`
    }

    inputPeopleValue ? finalCost(1) : finalCost(0)
}

secondButton.onclick = function () {
    inputBill.value = ""
    inputPeople.value = ""
    inputCustom.value = ""
    valuePercentage = 0

    tipAmount.textContent = "$0.00"
    total.textContent = "$0.00"

    if (currentSelect) {
        pressedDown(currentSelect)
        currentSelect = null
    }
}