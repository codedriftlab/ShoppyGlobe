import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    search: ""
  },
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartItems.find(i => i.id === action.payload.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  setSearch,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;