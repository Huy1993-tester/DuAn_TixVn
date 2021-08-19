import { showtimeService } from "../../core/service/showtime.service";
import {
  GET_SHOWTIME_BY_MOVIE,
  SET_SHOWTIME_DETAIL
} from "../constant/showtime.constant";

export const createShowtimeAction = (showtime) => {
  return async () => {
    try {
      console.log(showtime);
      return await showtimeService.createShowtime(showtime);
    } catch (error) {
      return error.response;
    }
  };
};

export const setShowtimeDetailAction = (payload) => {
  return {
    type: SET_SHOWTIME_DETAIL,
    payload
  };
};

export const getShowtimeByMovieAction = (movieCode) => {
  return async (dispatch) => {
    try {
      const response = await showtimeService.getShowtimeByMovie(movieCode);
      console.log(response);
      dispatch({
        type: GET_SHOWTIME_BY_MOVIE,
        payload: response.data
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};
