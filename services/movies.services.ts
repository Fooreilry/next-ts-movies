import { FullMovieData, GetMoviesResponse } from "@/types/Responses";

export type filtersProps = {
  page: string;
  name: string;
  type: string;
}

const headers = {
  "Content-Type": "application/json",
  ...(process.env.TOKEN && { "X-API-KEY": process.env.TOKEN }),
};

export const MoviesServices = {
  async getAllMovies(filters: filtersProps): Promise<GetMoviesResponse | null> {
    const { page, name, type } = filters
    try {
      const request = await fetch(`${process.env.BASE_URL}/v1.3/movie?name=${name}&type=${type}&page=${page}&limit=24`, {
        method: "GET",
        headers: headers,
      });
      if (request.status !== 200) return null
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
