import {
  GET_DETAIL_MOVIE,
  GET_LIST_MOVIE,
  GET_MOVIE,
} from "../constant/movie.constant";
import { GET_LIST_CUM_RAP, GET_LIST_RAP } from "../constant/cinema.constant";
const initailState = {
  list_movie: [],
  list_rap: [],
  list_cum_rap: [],
  list_phim: [],
  detail_movie: {},
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
    case GET_DETAIL_MOVIE: {
      state.detail_movie = payload;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
