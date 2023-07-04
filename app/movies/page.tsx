import { MoviesServices } from "@/services/movies.services";
import { FullMovieData, GetMoviesResponse } from "@/types/Responses";
import { filtersProps } from "@/services/movies.services";
import MoviesList from "@/components/pages/MoviesList";

interface MoviesProps {
  searchParams: filtersProps;
}


export default async function MoviesPage({searchParams}: MoviesProps) {
  const movies: FullMovieData[] = await getMovies({
    page: searchParams.page || '1',
    name: searchParams.name || '',
    type: searchParams.type || 'movie',
  });
  return (
    <main>
      <MoviesList movies={movies} searchParams={searchParams}/>
    </main>
  )
}
async function getMovies(filters: filtersProps): Promise<FullMovieData[]> {
  const moviesResponse: GetMoviesResponse = await MoviesServices.getAllMovies(filters);
  const movies: FullMovieData[] = moviesResponse.docs;
  return movies;
}





