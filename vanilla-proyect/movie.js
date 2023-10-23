const urlGenres = "https://moviesminidatabase.p.rapidapi.com/genres/"
const urlMoviesByGenre = `https://moviesminidatabase.p.rapidapi.com/movie/byGen/`


function renderItemList(e) {
    return `<p class="my-2 hover:text-blue-800 hover:font-semibold">
                <a href="?genre=${e}" class="cursor-pointer">${e}</a>
            </p>`
}

export async function getGenres(e) {
    const response = await fetch(urlGenres, {
        headers: {
            'X-RapidAPI-Key': '4cc4c577cdmsh6e25517382b8781p16d967jsn992e2eeb5bdc',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
        }
    })

    const data = await response.json()

    data.results.forEach((item) => {
        e.innerHTML += renderItemList(item.genre)
    })
}

export function getGenreByUrl() {
    const searchedGenre = location.search.split("1")[1]
}