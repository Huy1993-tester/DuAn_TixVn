import { showtimeService } from "../../core/service/showtime.service";

export const createShowtimeAction = (showtime) => {
  return () => {
    try {
      console.log(showtime);
      //   return showtimeService.createShowtime(showtime);
    } catch (error) {
      console.log(error.response);
    }
  };
};
