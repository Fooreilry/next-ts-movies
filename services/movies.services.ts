import { GetMoviesResponse } from "@/types/Responses";
import axios, { AxiosResponse } from "axios";


const headers = {
  "Content-Type": "application/json",
  "X-API-KEY": process.env.TOKEN,
};

export const MoviesServices = {
  async getAllMovies(): Promise<GetMoviesResponse> {
    try {
      const request = await fetch<GetMoviesResponse>(
        `${process.env.BASE_URL}/v1.3/movie`,
        {
          method: "GET",
          headers: headers,
        }
      );

      return await request.json();
    } catch (error) {
      console.log((error as Error).message);
    }
  },
};