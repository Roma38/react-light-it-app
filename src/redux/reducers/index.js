import { combineReducers } from "redux";
import { logInReducer } from "./logIn";
import { productsReduser } from "./products";
import { reviewsReduser } from "./reviews";

const rootReduser = combineReducers({
  logIn: logInReducer,
  products: productsReduser,
  reviews: reviewsReduser
});

export default rootReduser;
