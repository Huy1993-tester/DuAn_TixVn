import { ReducerMovie } from "./reducerMovie";
import { combineReducers } from "redux";
export const RootReducer = combineReducers({
  movie: ReducerMovie,
});
