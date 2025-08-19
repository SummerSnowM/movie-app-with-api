const movieTitleInput = document.getElementById('movie-title');
const movieInfo = document.getElementById('movie-info');
const loading = document.getElementById('loading');

async function fetchMovie() {
  const movieTitle = movieTitleInput.value;

  if (movieTitle === '') {
    movieInfo.innerHTML = `Please enter a movie title!`;
  } else {
    try {
      loading.style.display = 'block';
      const movie = encodeURIComponent(movieTitle);
      const response = await fetch(
        `https://www.omdbapi.com/?t=${movie}&apikey=b0984a5c`
      );
      console.log(`https://www.omdbapi.com/?t=${movie}`);
      if (response.ok) {
        const data = await response.json();
        loading.style.display = 'none';
        movieInfo.innerHTML = `<strong>Title:</strong> ${data.Title}<br ><strong>Year:</strong> ${data.Year}<br ><strong>Rated:</strong> ${data.Rated}<br ><strong>Genre:</strong> ${data.Genre}<br ><strong>Plot:</strong> ${data.Plot}`;
      }
    } catch (error) {
      movieInfo.innerHTML = `Movie not found!`;
    }
  }
}
