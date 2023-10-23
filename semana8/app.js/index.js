const form = document.querySelector("#form")
const input = document.querySelector("#input-pokemon")
const moveset = document.querySelector("#moveset")
const imgPokemon = document.querySelector("#img-pokemon")
const namePokemon = document.querySelector("#pokemon-name")
const divMoves = document.querySelectorAll(".thisIsADiv")
const pokemonMoves = [
    first = document.querySelector("#first-move"),
    second = document.querySelector("#second-move"),
    third = document.querySelector("#third-move"),
    fourth = document.querySelector("#fourth-move"),
]

const myChart = new Chart(stats, {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                label: "",
                data: []
            }
        ]
    }
})

function displayMoves(e) {
    if (e) {
        moveset.classList.remove("hidden")
        canvas.classList.remove("hidden")
    }
}

function baseMoves(move, e, moveNumber, rest2) {
    return pokemonMoves[move].textContent = e.moves[moveNumber]?.move.name ?? e.moves[move]?.move.name; rest2
}

function showPokemonMoves(e) {
    baseMoves(0, e, 18, "")
    baseMoves(1, e, 24, `?? ""`)
    baseMoves(2, e, 57, `?? ""`)
    baseMoves(3, e, 72, `?? ""`)
    
    for (let icon of divMoves) {
        if (icon.lastElementChild.textContent === "") {
            icon.firstElementChild.src = ""
        } else {
            icon.firstElementChild.src = "./assets/icons/check.svg"
        }
    } 
}

form.onsubmit = async function (e) {
    e.preventDefault()

    const url = `https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}`

    const response = await fetch(url)
    const data = await response.json()

    namePokemon.textContent = data.name
    imgPokemon.src = data.sprites.other["official-artwork"].front_default

    showPokemonMoves(data)
    displayMoves(input.value)

    const labels = data.stats.map((item) => item.stat.name)
    const values = data.stats.map((item) => item.base_stat)

    myChart.data.datasets[0].label = `${namePokemon.textContent.charAt(0).toUpperCase() + namePokemon.textContent.slice(1)}'s base stats`
    myChart.data.labels = labels
    myChart.data.datasets[0].data = values
    myChart.update()
}