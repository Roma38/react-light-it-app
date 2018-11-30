import { combineReducers } from "redux";
import { logInReducer } from "./logIn";
import { productsReduser } from "./products";

const rootReduser = combineReducers({
  logIn: logInReducer,
  products: productsReduser
});

export default rootReduser;
