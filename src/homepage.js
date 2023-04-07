const currentlyWatching = document.getElementById("load-current-watch");
const suggestedToWatch = document.getElementById("load-suggest-watch");
const previouslyWatched = document.getElementById("load-previous-watch");


//Current Watch
async function fetchMovies() {
  try {
    const response = await fetch("http://localhost:3000/currentWatch/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displayCurrentWatching() {
  const data = await fetchMovies();
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
  currentlyWatching.innerHTML = listMovies;
}

displayCurrentWatching();

//Previous Movies
async function fetchPreviousMovies() {
  try {
    const response = await fetch("http://localhost:3000/isPrevious/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function displayPreviousWatch() {
  const data = await fetchPreviousMovies();
  console.log(data);
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
  previouslyWatched.innerHTML = listMovies;
}

displayPreviousWatch();

// Suggest Watch
async function fetchSuggestedMovies() {
  try {
    const response = await fetch("http://localhost:3000/isSuggested");
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displaySuggestWatch() {
  const data = await fetchSuggestedMovies();
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
  suggestedToWatch.innerHTML = listMovies;
}

displaySuggestWatch();