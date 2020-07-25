import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",

  initialState: {
    categoriesList: [],
    currentCategory: ""
  },

  reducers: {
    initList: (state, action) => {
      state.categoriesList = action.payload;
    },

    changeCategory: (state, action) => {
      state.currentCategory = action.payload;
    }
  }
});

export const getCategories = () => async dispatch => {
  let results = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/categories"
  );
  dispatch(initList(results.data.results));
};

export const { initList, changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
