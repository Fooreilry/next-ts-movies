import { FullMovieData, GetMoviesResponse } from "@/types/Responses";

export type filtersProps = {
  page: string;
  name: string;
}

const headers = {
  "Content-Type": "application/json",
  ...(process.env.TOKEN && { "X-API-KEY": process.env.TOKEN }),
};

export const MoviesServices = {
  async getAllMovies(filters: filtersProps): Promise<GetMoviesResponse> {
    const { page, name } = filters
    try {
      const request: Response = await fetch(`${process.env.BASE_URL}/v1.3/movie?name=${name}&page=${page}&limit=24`, {
        method: "GET",
        headers: headers,
      });

      return await request.json();
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
  async getMovie(id: number): Promise<FullMovieData> {
    try {
      const request: Response = await fetch(`${process.env.BASE_URL}/v1.3/movie/${id}`, {
        method: "GET",
        headers: headers,
      });
      return await request.json();
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  }
};
