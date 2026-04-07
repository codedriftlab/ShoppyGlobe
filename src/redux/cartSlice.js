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
    }
  }
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;