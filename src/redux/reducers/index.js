import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { productsReduser } from "./products";
import { reviewsReduser } from "./reviews";

const rootReduser = combineReducers({
  auth: authReducer,
  products: productsReduser,
  reviews: reviewsReduser
});

export default rootReduser;
