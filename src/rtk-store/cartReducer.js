import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartCount: 0,
    cartContents: []
  },

  reducers: {
    add: (state, action) => {
      state.cartContents.push(action.payload);
      state.cartCount++;
    },

    remove: (state, action) => {
      for (let i = 0; i < state.cartContents.length; i++) {
        if (action.payload.name === state.cartContents[i].name) {
          state.cartContents.splice(i, 1);
          state.cartCount--;
          break;
        }
      }
    }
  }
});

export const removeFromCart = payload => {
  return async dispatch => {
    await axios.put(
      `https://api-js401.herokuapp.com/api/v1/categories/${payload._id}`,
      { stock: payload.stock + 1 }
    );
    dispatch(remove(payload));
  };
};

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
