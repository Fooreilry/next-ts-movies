"use client";
import { FC, useState } from "react";
import useDebounce from "@/hooks/useDebounce/Index";
import Input from "../UI/Input/Index";
import ItemsList from "../ItemsList/ItemsList";
import MovieCard from "../UI/MovieCard/Index";

interface IMovie {
  id: number;
  name: string;
  poster: {
    url: string;
  };
}

const MovieList: FC<{ movies: IMovie[] }> = ({ movies }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(searchValue, 500)

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
          renderItem={(movie: IMovie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              name={movie.name}
              poster={movie.poster.url}
            />
          )}
        />
      </div>
    </>
  );
};

export default MovieList;
