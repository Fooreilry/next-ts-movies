"use client";
import { FC, useState } from "react";
import useDebounce from "@/hooks/useDebounce/Index";
import Input from "../UI/Input/Index";
import ItemsList from "../ItemsList/ItemsList";
import MovieCard from "../UI/MovieCard/Index";
import { FullMovieData } from "@/types/Responses";

const MovieList: FC<{ movies: FullMovieData[] }> = ({ movies }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(searchValue, 500);

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(debouncedValue.toLowerCase())
  );
  const searchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Searching for: ${searchValue}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Input
        searchHandle={searchHandle}
        handleSubmit={handleSubmit}
        searchValue={searchValue}
      />
      <div>
        <ItemsList
          items={filteredMovies}
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center mt-10"
          }
          renderItem={(movie: FullMovieData) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              name={movie.name}
              poster={movie.poster.url}
              rating={movie.rating.imdb}
            />
          )}
        />
      </div>
    </div>
  );
};

export default MovieList;
