// DOM
//Cambiar el color del body - Obtener un elemento desde JS

const cuerpoDeLaWeb = document.getElementsByTagName("body") //old
console.log(cuerpoDeLaWeb[0])

const cuerpoDeLaWeb2 = document.querySelector("body") // new
console.log("query.Selector", cuerpoDeLaWeb2)
// body.style.backgroundColor = "#eee"
// body.style.fontSize = "20px"

const secondaryTitles = document.getElementsByTagName("h2") // old

for (const item of secondaryTitles) {
    console.log(item)
}

console.log("-------")

const secondaryTitles2 = document.querySelectorAll("h2") // new
secondaryTitles2.forEach((item) => {
    console.log(item)
})

const title = document.getElementById("title") // old

const title2 = document.querySelector("#title") // new

const imageSomething = document.getElementsByClassName("img-something") // old
console.log(imageSomething)

const imageSomething2 = document.querySelectorAll(".img-something") //new

const btnChangeWeb = document.querySelector("#btn-change-web")

btnChangeWeb.onclick = function () {
    imageSomething2.src = "https://i1.sndcdn.com/avatars-000517859640-owtzab-t240x240.jpg";
    
    imageSomething2.style.cssText = "width: 200px"

    title2.textContent = "Headphones"
}