import './style.css'
import { getGenres, getGenreByUrl } from './movie'

document.querySelector('#app').innerHTML = `
  <div class="p-6 max-w-[60%] m-auto">
    <div>
      <h1 class="text-6xl fonct-bold text-blue-800">Películas</h1>
    </div>
    <hr class="mt-5"/>
    <div class="flex gap-20 mt-10">
      <div class="flex-1">
        <div>
          <h4>Filter by:</h4>
        </div>
        <div id="container-genres">
          
        </div>
      </div>
      <div>
        <div class="grid grid-cols-3 gap-20">
            <div>
              <img 
              src="https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001790?referenceScheme=HeadOffice&allowPlaceHolder=true"
              class="w-[200px]"/>
              <h2 class="font-semibold text-xl mt-2">After: Para Siempre<h2/>
              <p>Drama, 1h 40m, +14</p>
            </div>
        </div>
      </div>
    </div>  
  </div>
`


getGenres(document.querySelector("#container-genres"))
getGenreByUrl()