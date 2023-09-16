"use client";
import Input from "../UI/Input/Index";
import ItemsList from "../ItemsList/ItemsList";
import MovieCard from "../UI/MovieCard/Index";
import { GetMoviesResponse } from "@/types/Responses";
import Heading from "../UI/Heading/Index";
import { filtersProps } from "@/services/movies.services";
import Pagination from "../UI/Pagination/Index";

interface MovieListProps {
  movies: GetMoviesResponse | null;
  searchParams: filtersProps;
}

const MoviesList = ({ movies, searchParams }: MovieListProps) => {
  return (
    <section className="MovieList">
      <div className="max-w-screen-xl mx-auto">
        <Heading heading="Movies" />
        <div className="mt-8">
          <Input />
        </div>
        <div>
          <ItemsList
            items={movies?.docs ?? []}
            className={
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center mt-10"
            }
            renderItem={(movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                name={movie.name}
                poster={movie.poster?.url}
                rating={movie.rating?.imdb}
                type={movie.type}
              />
            )}
          />
          <Pagination searchParams={searchParams} />
        </div>
      </div>
    </section>
  );
};

export default MoviesList;
