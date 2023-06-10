import Input from "@/components/UI/Input/Index";
import Button from "../components/UI/Button/Index";
import Heading from "@/components/UI/Heading/Index";
import Switch from "@/components/UI/Switch/Index";
import MovieCard from "@/components/UI/MovieCard/Index";
import Skeleton from "@/components/UI/Skeleton/Index";
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
