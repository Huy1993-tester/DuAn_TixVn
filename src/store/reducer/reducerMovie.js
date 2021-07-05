import {
  GET_LIST_MOVIE,
  GET_MOVIE,
  GET_MOVIE_LIST_PAGINATION
} from "../constant/movie.constant";
import { GET_LIST_CUM_RAP, GET_LIST_RAP } from "../constant/cinema.constant";
const initailState = {
  list_movie: [],
  list_rap: [],
  list_cum_rap: [],
  list_phim: [],
  movieListPagination: [],
  totalPages: 0,
  movieDetail: {}
};

export const ReducerMovie = (state = initailState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_MOVIE: {
      state.list_movie = payload;
      return { ...state };
    }
    case GET_LIST_RAP: {
      state.list_rap = payload;
      return { ...state };
    }
    case GET_LIST_CUM_RAP: {
      state.list_cum_rap = payload;
      return { ...state };
    }
    case GET_MOVIE: {
      state.list_phim = payload;
      return { ...state };
    }
    case GET_MOVIE_LIST_PAGINATION: {
      state.movieListPagination = [...payload.items];
      state.totalPages = payload.totalPages;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
