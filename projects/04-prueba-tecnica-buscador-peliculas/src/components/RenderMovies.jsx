function MoviesFound({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <p>{movie.type}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}

function NoMoviesFound() {
  return (
    <main>
      <p>No movies found with this title, try a diferent title</p>
    </main>
  )
}

export default function RenderMovies({ movies }) {
  const moviesFound = movies?.length > 0
  return moviesFound ? <MoviesFound movies={movies} /> : <NoMoviesFound />
}
