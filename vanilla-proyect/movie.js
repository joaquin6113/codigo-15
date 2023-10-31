const urlGenres = "https://moviesminidatabase.p.rapidapi.com/genres/"
const urlMoviesByGenre = `https://moviesminidatabase.p.rapidapi.com/movie/byGen/`
const urlMoviesById = `https://moviesminidatabase.p.rapidapi.com/movie/id/`
const apiKeys = {
    headers: {
        'X-RapidAPI-Key': 'd1ca6baa1cmsh8d4d8b5d6008a0dp16221fjsncdc2d7e44f3d',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
    }
}

const getURL = async (url) => await (await fetch(url, apiKeys)).json()


const getTextGenreByUrl = () => location.search.split("=")[1]


function renderItemList(e) {
    const genreFromUrl = getTextGenreByUrl()

    const classToElement = genreFromUrl === e 
    ? "text-blue-800 font-semibold text-xl"
    : "hover:text-blue-800 hover:font-semibold"

    return `<p class="my-2 ${classToElement}">
                <a href="?genre=${e}" class="cursor-pointer">${e}</a>
            </p>`
}

async function renderMovie(e) {
    const data = await getURL(`${urlMoviesById}${e.imdb_id}`)
    const movieData = data.results

    return  `<div>
              <img 
              src="${movieData.banner}"
              class="w-full md:w-[200px] md:h-[300px]"/>
              <h2 class="font-semibold text-xl mt-2">${e.title}<h2/>
              <p class="truncate">${movieData.plot}</p>
             </div>`
}

export async function getGenres(e) {
    const data = await getURL(urlGenres)
    // const data = await response.json()

    data.results.forEach(({ genre }) => e.innerHTML += renderItemList(genre))
}

export async function getGenreByUrl() {
    const searchedGenre = getTextGenreByUrl()
    
    if (!searchedGenre) return

    const data = await getURL(`${urlMoviesByGenre}${searchedGenre}`)

    // const responseId = await fetch(`${urlMoviesById}${movie.imdb_id}`, apiKeys)
    // const dataId = await response.json()
        // console.log(dataId)
    const movieDiv = document.querySelector("#movies")

    data.results.slice(0, 6).forEach(async (movie) => {
        const movieData = await renderMovie(movie)
        movieDiv.innerHTML += movieData
    })
}