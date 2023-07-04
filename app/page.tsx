import { MoviesServices } from "@/services/movies.services";
import { FullMovieData, GetMoviesResponse } from "@/types/Responses";
import { filtersProps } from "@/services/movies.services";
import MovieList from "@/components/MovieList/Index";


interface HomeProps {
  searchParams: filtersProps;
}

export default async function Home({searchParams}: HomeProps) {
  const movies: FullMovieData[] = await getMovies({
    page: searchParams.page || '1',
    name: searchParams.name || '',
    type: searchParams.type || 'movie',
  });
  return (
    <main>
      <MovieList movies={movies} searchParams={searchParams} />
    </main>
  );
}

async function getMovies(filters: filtersProps): Promise<FullMovieData[]> {
  const moviesResponse: GetMoviesResponse = await MoviesServices.getAllMovies(filters);
  const movies: FullMovieData[] = moviesResponse.docs;
  return movies;
}
