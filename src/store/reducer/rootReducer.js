import { ReducerMovie } from "./reducerMovie";
import { combineReducers } from "redux";
import { UserReducer } from "./user.reducer";
export const RootReducer = combineReducers({
  movie: ReducerMovie,
  user: UserReducer
});
