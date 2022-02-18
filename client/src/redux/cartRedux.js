import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    
    removeProduct: (state, action, product) => {
      state.quantity -= 1;
      state.products.pop(product);
      state.total -= action.payload.price * action.payload.quantity;
    },
    
    resetProducts: (state) => {
      console.log(state);
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    }
  },
});

export const { addProduct, removeProduct, resetProducts } = cartSlice.actions;
export default cartSlice.reducer;
