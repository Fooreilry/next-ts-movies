"use client";
import { FC } from "react";
import Input from "../UI/Input/Index";
import ItemsList from "../ItemsList/ItemsList";
import MovieCard from "../UI/MovieCard/Index";
import { FullMovieData } from "@/types/Responses";
import Heading from "../UI/Heading/Index";
import Switch from "../UI/Switch/Index";
import { filtersProps } from "@/services/movies.services";
import Pagination from "../UI/Pagination/Index";

interface MovieListProps {
  movies: FullMovieData[];
  searchParams: filtersProps;
}

const MovieList: FC<MovieListProps> = ({ movies, searchParams }) => {
 
const isSearchActive: boolean = !!searchParams.name;

  return (
    <section className="MovieList">
    <div className="max-w-screen-xl mx-auto">
      <Heading heading={"MaileHereko"} />
      <p>
        List of movies and TV Shows, I, <span>Pramod Poudel</span> have watched till date.
        Explore what I have watched and also feel free to make a suggestion. 😉
      </p>
      <div className="mt-8">
        <Input
        />
      </div>
      <div className="mt-24">
        <Switch />
      </div>
      <div>
        <ItemsList
          items={movies}
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center mt-10"
          }
          renderItem={(movie: FullMovieData) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              name={movie.name}
              poster={movie.poster.url}
              rating={movie.rating.kp}
              type={movie.type}
            />
          )}
        />
        {!isSearchActive && (
         <Pagination searchParams={searchParams}/>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieList;