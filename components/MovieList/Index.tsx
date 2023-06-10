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
    <>
      <Input
        searchHandle={searchHandle}
        handleSubmit={handleSubmit}
        searchValue={searchValue}
      />
      <div>
        <ItemsList
          items={filteredMovies}
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
    </>
  );
};

export default MovieList;
