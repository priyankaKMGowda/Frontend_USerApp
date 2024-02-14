import { combineReducers } from "redux";
import postReducer from "./postReducer";

let rootReducers = combineReducers({
  postReducer,
});

export default rootReducers;
