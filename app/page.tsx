import { MoviesServices } from "@/services/movies.services";
import { FullMovieData } from "@/types/Responses";
import { filtersProps } from "@/services/movies.services";
import MovieList from "@/components/MovieList/Index";


export interface HomeProps {
  searchParams: filtersProps;
}

export default async function Home({searchParams}: HomeProps) {
  const movies = await getMovies({
    page: searchParams.page || '1',
  });
  return (
    <main>
      <MovieList movies={movies} searchParams={searchParams} />
    </main>
  );
}

async function getMovies(filters: filtersProps): Promise<FullMovieData[]> {
  const moviesResponse = await MoviesServices.getAllMovies(filters);
  const movies = moviesResponse.docs;
  return movies;
}
