import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restaurants_url: "abrar",
  },

  reducers: {
    setUrl: (state, actions) => {
      console.log(actions);
      state.restaurants_url = actions.payload;
    },
    addItem: (state, actions) => {
      state.items.push(actions.payload);
    },

    clearCart: (state, actions) => {
      state.items = [];
    },

    removeItem: (state, actions) => {
      state.items.pop();
    },
  },
});

export default cartSlice.reducer;

export const { addItem, clearCart, removeItem, setUrl } = cartSlice.actions;
