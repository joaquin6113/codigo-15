const containerInputBill = document.querySelector("#container-input-bill")
const containerPercentage = document.querySelector("#container-percentage");
const containerInputPeople = document.querySelector("#container-input-people")

let valuePercentage = 0
let currentSelect = null

function setFocusInput(element) {
    element.children[1].focus
}

function removeGreenInput(element) {
    element.classList.remove("bg-green-200")
    element.classList.add("bg-[#00494d]")
}

function setButtonSelect(element) {
    const spanValue = element.children[0].textContent
    const spanCurrentValue = currentSelect?.children[0].textContent

    if (currentSelect) removeGreenInput(currentSelect)

    if (spanValue === spanCurrentValue) {
        currentSelect.classList.remove("bg-green-200")
        currentSelect.classList.add("bg-[#00494d]")
        currentSelect = null   
    } else {
        element.classList.remove("bg-[#00494d]")
        element.classList.add("bg-green-200")
        currentSelect = element
 }
}

function renderItemPercentage(value) {
  return `<div
            onclick="setButtonSelect(this)"
            class="bg-[#00494d] cursor-pointer text-white font-semibold text-xl rounded-md p-3 text-center"
          >
            <span>${value}</span>
          </div>`;
}

function renderInput(icon, placeholder, name) {
  return `<div
          class="flex items-center p-3 rounded-md bg-green-100/50 cursor-text"
          onclick="setFocusInput(this)"
        >
          <img src="${icon}" alt="" />
          <input
            type="text"
            name="${name}"
            placeholder="${placeholder}"
            class="w-full text-right outline-none bg-transparent text-green-900 text-xl font-semibold"
          />
        </div>`;
}

function generatePercentageList() {
  const percentages = ["5%", "10%", "15%", "25%", "50%"];

  percentages.forEach((percentage) => {
    containerPercentage.innerHTML += renderItemPercentage(percentage);
  });

  containerPercentage.innerHTML += renderInput(null, "Custom", "custom");
}

generatePercentageList();

containerInputBill.innerHTML = renderInput(
    "./assets/icon-dollar.svg", 
    "0.0", 
    "input-bill"
    )

containerInputPeople.innerHTML = renderInput(
    "./assets/icon-dollar.svg", 
    "0.0", 
    "input-people"
    )

const inputCustom = document.querySelector("input[name='custom']")

inputCustom.onkeyup = function () {
    if (currentSelect) {
        removeGreenInput(currentSelect)
        currentSelect = null
    }
}