import { createSlice } from "@reduxjs/toolkit";

// auth.slice.js
const initialState = {
    loading: false,
    products: null,
    success: false,
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        // GET PRODUCTS
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.products;
                state.success = true;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default productsSlice.reducer;
