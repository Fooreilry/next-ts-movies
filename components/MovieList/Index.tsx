"use client";
import { FC, useState } from "react";
import Input from "../UI/Input/Index";
import ItemsList from "../ItemsList/ItemsList";
import MovieCard from "../UI/MovieCard/Index";
import { FullMovieData } from "@/types/Responses";
import Heading from "../UI/Heading/Index";
import Switch from "../UI/Switch/Index";
import { useRouter } from "next/navigation"
import { updateSearchParams } from "@/utils/searchParams"
import { filtersProps } from "@/services/movies.services";

interface MovieListProps {
  movies: FullMovieData[];
  searchParams: filtersProps;
}

const MovieList: FC<MovieListProps> = ({ movies, searchParams }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [name, setName] = useState<string>('')

  const router = useRouter()

  const updateSearchQueryParams = (name: string) => {
    const searchParams: URLSearchParams = new URLSearchParams(window.location.search)

    if(name) {
      searchParams.set('name', name)
    } else {
      searchParams.delete('name')
    }
    searchParams.delete('page');

    const newPathName: string = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName)
  }

  const searchHandle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setName(searchValue); 
    updateSearchQueryParams(searchValue.toLowerCase());
  };

const totalPages: number = 10;
const pageNumbers: number[] = Array.from(Array(totalPages), (_, index) => index + 1);
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
          searchHandle={searchHandle}
          handleSubmit={handleSubmit}
          searchValue={searchValue}
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
              rating={movie.rating.imdb}
              type={movie.type}
            />
          )}
        />
        {!isSearchActive && (
            <div className="flex justify-center mt-8 mb-8">
              {pageNumbers.map((pageNumber) =>
                pageNumber === parseInt(searchParams.page || "1") ? (
                  <button
                    key={pageNumber}
                    className="mx-1 w-10 h-10 rounded bg-purple-500 hover:bg-purple-600 text-white"
                  >
                    {pageNumber}
                  </button>
                ) : (
                  <button
                    key={pageNumber}
                    onClick={() => {
                      const newPathnamePage = updateSearchParams("page", `${pageNumber}`);
                      router.push(newPathnamePage);
                    }}
                    className="mx-1 w-10 h-10 rounded bg-gray-200 hover:bg-gray-300 text-black"
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieList;