import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

let productsSlice = createSlice({
  name: "products",
  initialState: {
    categoriesList: [],
    currentCategory: ""
  },

  reducers: {
    createInitList: (state, action) => {
      state.categoriesList = action.payload;
    },

    viewOneProduct: (state, action) => {
      state.productToView = action.payload;
    }
  },

  add: (state, action) => {
    for (let i = 0; i < state.categoriesList.length; i++) {
      if (action.payload.name === state.categoriesList[i].name) {
        state.categoriesList[i].stock--;
        break;
      }
    }
  },

  remove: (state, action) => {
    for (let i = 0; i < state.categoriesList.length; i++) {
      if (action.payload.name === state.categoriesList[i].name) {
        state.categoriesList[i].stock++;
        break;
      }
    }
  }
});

export const {
  createInitList,
  viewOneProduct,
  add,
  remove
} = productsSlice.actions;

export const getCategories = () => async dispatch => {
  let results = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/categories"
  );
  dispatch(createInitList(results.data.results));
};

export const addToCart = payload => {
  return async dispatch => {
    await axios.put(
      `https://api-js401.herokuapp.com/api/v1/categories/${payload._id}`,
      { ...payload, stock: payload.stock - 1 }
    );
    dispatch(add(payload));
  };
};

export const getOneProduct = payload => async dispatch => {
  dispatch(viewOneProduct({}));
  let results = await axios.get(
    `https://api-js401.herokuapp.com/api/v1/categories/${payload}`
  );
  dispatch(viewOneProduct(results.data));
};
export default productsSlice.reducer;
