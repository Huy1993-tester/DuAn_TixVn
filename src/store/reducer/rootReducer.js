import { ReducerMovie } from "./reducerMovie";
import { combineReducers } from "redux";
import { UserReducer } from "./user.reducer";
import { BookingMovie } from "./bookMovie";
export const RootReducer = combineReducers({
  movie: ReducerMovie,
  user: UserReducer,
  booking: BookingMovie,
});
