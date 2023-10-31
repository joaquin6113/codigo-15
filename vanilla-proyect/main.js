import './style.css'
import { getGenres, getGenreByUrl } from './movie'

document.querySelector('#app').innerHTML = `
  <div class="p-6 lg:max-w-[60%] m-auto">
    <div>
      <h1 class="text-6xl fonct-bold text-blue-800">Películas</h1>
    </div>
    <hr class="mt-5"/>
    <div class="flex flex-col md:flex-row gap-14 md:gap-20 mt-3 md:mt-10">
      <div class="flex-1">
        <div>
          <h4>Filter by:</h4>
        </div>
        <div id="container-genres" class="flex md:block overflow-auto gap-3 whitespace-nowrap">
          
        </div>
      </div>
      <div>
        <div id="movies" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">

        </div>
      </div>
    </div>  
  </div>
`


getGenres(document.querySelector("#container-genres"))
getGenreByUrl()