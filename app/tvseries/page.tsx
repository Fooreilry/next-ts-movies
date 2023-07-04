import { MoviesServices } from "@/services/movies.services";
import { FullMovieData, GetMoviesResponse } from "@/types/Responses";
import { filtersProps } from "@/services/movies.services";
import TVSeriesList from "@/components/pages/TVSeries";

interface TVSeriesPageProps {
  searchParams: filtersProps;
}

export default async function TVSeriesPage({searchParams}: TVSeriesPageProps) {
  const movies: FullMovieData[] = await getMovies({
    page: searchParams.page || '1',
    name: searchParams.name || '',
    type: searchParams.type || 'tv-series',
  });
  return (
    <main>
      <TVSeriesList movies={movies} searchParams={searchParams}/>
    </main>
  )
}
async function getMovies(filters: filtersProps): Promise<FullMovieData[]> {
  const moviesResponse: GetMoviesResponse = await MoviesServices.getAllMovies(filters);
  const movies: FullMovieData[] = moviesResponse.docs;
  return movies;
}





