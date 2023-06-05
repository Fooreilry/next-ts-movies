export interface GetMoviesResponse {
  docs: Array<{
    id: number;
    externalId: {
      kpHD: string;
      imdb: string;
      tmdb: number;
    };
    name: string;
    alternativeName: string;
    enName: string;
    names: Array<{ name: string; language: string; type: string }>;
    type: string;
    typeNumber: number;
    year: number;
    description: string;
    shortDescription: string;
    slogan: string;
    status: string;
    rating: {
      kp: number;
      imdb: number;
      tmdb: number;
      filmCritics: number;
      russianFilmCritics: number;
      await: number;
    };
    votes: {
      kp: string;
      imdb: string;
      tmdb: number;
      filmCritics: number;
      russianFilmCritics: number;
      await: number;
    };
    movieLength: number;
    ratingMpaa: string;
    ageRating: number;
    logo: {
      url: string;
    };
    poster: {
      url: string;
      previewUrl: string;
    };
    backdrop: {
      url: string;
      previewUrl: string;
    };
    videos: {
      trailers: Array<{
        url: string;
        name: string;
        site: string;
        type: string;
        size: number;
      }>;
      teasers: Array<{
        url: string;
        name: string;
        site: string;
        type: string;
        size: number;
      }>;
    };
    genres: Array<{ name: string }>;
    countries: Array<{
      name: string;
    }>;
    persons: Array<{
      id: number;
      photo: string;
      name: string;
      enName: string;
      description: string;
      profession: string;
      enProfession: string;
    }>;
    reviewInfo: {
      count: number;
      positiveCount: number;
      percentage: string;
    };
    seasonsInfo: Array<{
      number: number;
      episodesCount: number;
    }>;
    budget: {
      value: number;
      currency: string;
    };
    fees: {
      world: {
        value: number;
        currency: string;
      };
      russia: {
        value: number;
        currency: string;
      };
      usa: {
        value: number;
        currency: string;
      };
    };
    premiere: {
      country: string;
      world: string;
      russia: string;
      digital: string;
      cinema: string;
      bluray: string;
      dvd: string;
    };
    similarMovies: Array<{
      id: number;
      name: string;
      enName: string;
      alternativeName: string;
      type: string;
      poster: {
        url: string;
        previewUrl: string;
      };
    }>;
    sequelsAndPrequels: Array<{
      id: number;
      name: string;
      enName: string;
      alternativeName: string;
      type: string;
      poster: {
        url: string;
        previewUrl: string;
      };
    }>;
    watchability: {
      items: Array<{
        name: string;
        logo: {
          url: string;
        };
        url: string;
      }>;
    };
    releaseYears: Array<{
      start: number;
      end: number;
    }>;
    top10: number;
    top250: number;
    ticketsOnSale: boolean;
    totalSeriesLength: number;
    seriesLength: number;
    isSeries: boolean;
    audience: Array<{
      count: number;
      country: string;
    }>;
    facts: Array<{
      value: string;
      type: string;
      spoiler: boolean;
    }>;
    imagesInfo: {
      postersCount: number;
      backdropsCount: number;
      framesCount: number;
    };
    productionCompanies: Array<{
      name: string;
      url: string;
      previewUrl: string;
    }>;
  }>;
  total: number;
  limit: number;
  page: number;
  pages: number;
}
