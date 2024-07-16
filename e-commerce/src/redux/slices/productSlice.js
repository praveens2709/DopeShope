import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    categories: [],
    cart: [],
    selectedProduct: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addToCart: (state, action) => {
            const { product, quantity } = action.payload;
            const existingItem = state.cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.cart.push({ ...product, quantity });
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            state.cart = state.cart.map(item =>
                item.id === productId ? { ...item, quantity: quantity } : item
            );
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        resetSelectedProduct: (state) => {
            state.selectedProduct = null;
        },
    },
});

export const {
    setCategories,
    setProducts,
    addToCart,
    removeFromCart,
    updateQuantity,
    setSelectedProduct,
    resetSelectedProduct,
} = productSlice.actions;

export default productSlice.reducer;
