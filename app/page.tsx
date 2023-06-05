import Input from "@/components/UI/Input/Index"
import Button from '../components/UI/Button/Index';
import Heading from "@/components/UI/Heading/Index";
import Switch from "@/components/UI/Switch/Index";
import MovieCard from "@/components/UI/MovieCard/Index";
import Header from "@/components/Header/Index";
import Skeleton from "@/components/UI/Skeleton/Index";
import { MoviesServices } from "@/services/movies.services";
import { GetMoviesResponse } from "@/types/Responses";
import { GetServerSideProps } from "next";


export default async function Home() {
  const moveis = await getMovies();
  return (
    <main>
      <div>
        {/* <ItemsList
        items={movies}
        renderItems={(movie: any) => <MovieCard key={movie.id} />}
      /> */}
      </div>
      <MovieCard />
    </main>
  );
}


async function getMovies(): GetMoviesResponse {
  const moviesData = await MoviesServices.getAllMovies();
  console.log(moviesData);

  return moviesData;
}