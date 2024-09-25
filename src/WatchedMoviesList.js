import WatchedMovie from "./WatchedMovie";
const WatchedMoviesList = ({ watched, onSelectMovie, onDeleteWatched }) => {
  return (
    <ul className="list list-movies">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onSelectMovie={onSelectMovie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};
export default WatchedMoviesList;
