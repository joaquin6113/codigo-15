const redColor = document.querySelector(".red")
const grayColor = document.querySelector(".gray")
const blackColor = document.querySelector(".black")
const carButton = document.querySelector(".car__button")
const carImage = document.querySelector("img")

redColor.addEventListener("click", () => {
    carButton.style.backgroundColor = "red"
    carImage.src = "./assets/mercedez_red.jpg"
})

grayColor.addEventListener("click", () => {
    carButton.style.backgroundColor = "gray"
    carImage.src = "./assets/mercedez_gray.jpg"
})

blackColor.addEventListener("click", () => {
    carButton.style.backgroundColor = "black"
    carImage.src = "./assets/mercedez_black.webp"
})

const etiquetaH3 = document.querySelector("h3")

