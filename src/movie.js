async function fetchMovieDetails(id) {
  try {
    const response = await fetch(`http://localhost:3000/movies/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displayMovieDetails() {
  const urlSource = new URLSearchParams(window.location.search);
  const id = urlSource.get(id);
  const movieDetails = document.getElementById("movie-details");
  const data = await fetchMovieDetails(id);
  const genre = data.genre
    .map(
      (genre) =>
        `<span class="genre rounded-3xl border px-3 border-black p-1">${genre}</span>`
    )
    .join("");

  movieDetails.innerHTML = `
  <div class="w-auto h-6">
  <h2 class="font-bold text-4xl">${data.title}</h2>
  </div>
  
  <div class="flex flex-1 sm:mt-10">
  <img src="${data.image}" class="object-fill hidden md:flex h-72 w-52 rounded-2xl mt-1"/>
  <div class="flex flex-col flex-wrap">
  <div>  
  <iframe width="375" height="230" class="rounded-2xl sm:hidden mt-16 flex lg:ml-20" src="${data.trailer}"></iframe>
  <p class="lg:ml-1 lg:justify-evenly flex mx-1 h-min w-auto lg:mt-7 font-bold mt-5 sm:mt-7 ">${genre}</p>
  </div>
  <p class=" relative text-lg sm:text-sm mt-5 sm:mt-5 sm:ml-3 font-bold w-80">${data.synopsis}</p>
  <p class="lg:ml-3 mt-20">IMBD Rating ⭐${data.rating}/10</p>
  </div>
  <div class="sm:-mt-4">  
  <iframe width="590" height="320" class="rounded-2xl hidden sm:flex lg:ml-20" src="${data.trailer}"></iframe>
  </div>
  </div>
  `;
}
displayMovieDetails();

