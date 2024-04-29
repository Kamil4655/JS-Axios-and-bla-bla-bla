fetch('https://api.tvmaze.com/shows')
.then(res=>res.json())
.then(data=>{getFilms(data);
})


var film=document.getElementById("my-film");
function getFilms(films){
    film.innerHTML="";



    films.forEach(char=>{
        film.innerHTML+=

       `<div class="col-2">
        <img src="${char.image.medium}" class="card-img-top" alt="...">
        <div class="card-body my-5 border-radius:5px;">
          <h5 class="card-title" style="color:white;>${char.name}</h5>
          <p class="card-text" style="color:white;>${char.imdb}</p>
          
          <p class="card-text">IMDB:${char.rating.average}</p>
          <p class="card-text" >${char.language}</p>
          <p class="card-text">Kateqoriya:${char.genres}</p>

          <a href="#" class="btn btn-primary">Haqqinda</a>
        </div>
      </div>`
    })
}



function searchShows(query) {
  axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
  .then(response => {
    getFilms(response.data.map(item => item.show));
  })
  
}
const searchForm = document.getElementById("search-js")
searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const searchInput = document.getElementById("search-film-js")
  const query = searchInput.value;
  searchShows(query);

;});