import { MoviesServices } from "@/services/movies.services";
import { filtersProps } from "@/services/movies.services";
import MoviesList from "@/components/pages/MoviesList";

interface MoviesProps {
  searchParams: filtersProps;
}

export default async function MoviesPage({ searchParams }: MoviesProps) {
  const movies = await MoviesServices.getAllMovies({
    page: searchParams.page || "1",
    name: searchParams.name || "",
    type: searchParams.type || "movie",
  });
  return <MoviesList movies={movies} searchParams={searchParams} />;
}
