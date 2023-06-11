"use client";
import { FC, useState } from "react";
import useDebounce from "@/hooks/useDebounce/Index";
import Input from "../UI/Input/Index";
import ItemsList from "../ItemsList/ItemsList";
import MovieCard from "../UI/MovieCard/Index";
import { FullMovieData } from "@/types/Responses";
import Heading from "../UI/Heading/Index";
import Switch from "../UI/Switch/Index";

const MovieList: FC<{ movies: FullMovieData[] }> = ({ movies }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const searchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Heading heading={"MaileHereko"} />
      <p>
        List of movies and TV Shows, I, Pramod Poudel have watched till date.
        Explore what I have watched and also feel free to make a suggestion. 😉
      </p>
      <div className="mt-20">
        <Input
          searchHandle={searchHandle}
          handleSubmit={handleSubmit}
          searchValue={searchValue}
        />
      </div>
      <div className="mt-10">
        <Switch />
      </div>
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
