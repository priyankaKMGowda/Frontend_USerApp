import { createStore } from "redux";
import rootReducers from "../reducers/reducer";


let store = createStore(
  rootReducers
);

export default store;
