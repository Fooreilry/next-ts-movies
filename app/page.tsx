import { MoviesServices } from "@/services/movies.services";
import { filtersProps } from "@/services/movies.services";
import MovieList from "@/components/MovieList/Index";

interface HomeProps {
  searchParams: filtersProps;
}

export default async function HomePage({ searchParams }: HomeProps) {
  const movies = await MoviesServices.getAllMovies({
    page: searchParams.page || "1",
    name: searchParams.name || "",
    type: searchParams.type || "movie",
  });
  return <MovieList movies={movies} searchParams={searchParams} />;
}
