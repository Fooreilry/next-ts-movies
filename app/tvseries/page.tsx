import { MoviesServices } from "@/services/movies.services";
import { filtersProps } from "@/services/movies.services";
import TVSeriesList from "@/components/pages/TVSeries";

interface TVSeriesPageProps {
  searchParams: filtersProps;
}

export default async function TVSeriesPage({
  searchParams,
}: TVSeriesPageProps) {
  const movies = await MoviesServices.getAllMovies({
    page: searchParams.page || "1",
    name: searchParams.name || "",
    type: searchParams.type || "tv-series",
  });
  return <TVSeriesList movies={movies} searchParams={searchParams} />;
}
