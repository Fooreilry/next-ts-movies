import { MoviesServices } from "@/services/movies.services";
import { FullMovieData } from "@/types/Responses";

import MovieList from "@/components/MovieList/Index";

export default async function Home() {
  const movies = await getMovies();
  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
}

async function getMovies(): Promise<FullMovieData[]> {
  const moviesResponse = await MoviesServices.getAllMovies();
  const movies = moviesResponse.docs;

  return movies;
}
