import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  search: ""
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        item => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
    removeFromCart: (state, action) => {
  state.items = state.items.filter(
    item => item.id !== action.payload
  );
}
  }
});

export const { addToCart, clearCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;