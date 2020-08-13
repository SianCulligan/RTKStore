import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// import thunk from "./middleware/thunk.js";
import cartReducer from "./cartReducer";
import categoriesReducer from "./categoriesReducer";
import productReducer from "./productsReducer";

let reducers = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productReducer
});

//send reducer whatever you called the combined reducer
const store = configureStore({ reducer: reducers });

export default store;
