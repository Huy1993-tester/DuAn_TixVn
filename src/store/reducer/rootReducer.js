import { ReducerMovie } from "./reducerMovie";
import { combineReducers } from "redux";
import { UserReducer } from "./user.reducer";
import { CinemaReducer } from "./cinema.reducer";
import { ShowtimeReducer } from "./showtime.reducer";
export const RootReducer = combineReducers({
  movie: ReducerMovie,
  user: UserReducer,
  cinema: CinemaReducer,
  showtime: ShowtimeReducer
});
