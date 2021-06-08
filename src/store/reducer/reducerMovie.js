import { GET_LIST_MOVIE } from "../contance/global/contAction";

const initailState = {
  list_movie: [],
};

export const ReducerMovie = (state = initailState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_MOVIE: {
      state.list_movie = payload;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
