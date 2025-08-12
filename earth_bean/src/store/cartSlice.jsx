import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Earth Bean Classic', price: 12.99, image: '/product2.png', quantity: 0 },
    { id: 2, name: 'Earth Bean Dark Roast', price: 13.99, image: '/product1.png', quantity: 0 },
    { id: 3, name: 'Earth Bean Espresso', price: 14.99, image: '/product3.png', quantity: 0 },
  ],
  cartOpen: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.quantity += 1;
        state.cartOpen = true;
      }
    },
    updateQuantity: (state, action) => {
      const { id, delta } = action.payload;
      const product = state.products.find(p => p.id === id);
      if (product) {
        product.quantity = Math.max(0, product.quantity + delta);
      }
    },
    setCartOpen: (state, action) => {
      state.cartOpen = action.payload;
    }
  }
});

export const { addToCart, updateQuantity, setCartOpen } = cartSlice.actions;
export default cartSlice.reducer;