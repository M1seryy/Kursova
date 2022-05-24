import { createStore, combineReducers } from "redux";
import { cashReducers } from "./cashReducer";
import { customerReducers } from "./customerReducer";

const rootReducer = combineReducers({
  cashReducers,
  customerReducers,
});

export const store = createStore(rootReducer);
