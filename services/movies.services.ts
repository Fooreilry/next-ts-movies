import { FullMovieData, GetMoviesResponse } from "@/types/Responses";

const headers = {
  "Content-Type": "application/json",
  ...(process.env.TOKEN && { "X-API-KEY": process.env.TOKEN }),
};

export const MoviesServices = {
  async getAllMovies(): Promise<GetMoviesResponse> {
    try {
      const request = await fetch(`${process.env.BASE_URL}/v1.3/movie`, {
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
      const request = await fetch(`${process.env.BASE_URL}/v1.3/movie/${id}`, {
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
