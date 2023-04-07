async function fetchWatchlist() {
  try {
    const response = await fetch("http://localhost:3000/watchlist/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displayWatchlist() {
  const data = await fetchWatchlist();
  const moviesWatchlist = document.getElementById("watchlist");
  const listMovies = data
    .map((movies) => {
      return `
        <div>
        <a href="movie.html?id=${movies.id}">
        <img width="130px" height="200px" src="${movies.image}" class="rounded-[12px] object-cover"/>
        </a>
        </div>
        `;
    })
    .join("");
  moviesWatchlist.innerHTML = listMovies;
}

displayWatchlist();