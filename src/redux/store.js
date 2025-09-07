import { configureStore } from "@reduxjs/toolkit";
import signup from "./slices/authSlice/signup";
import signin from "./slices/authSlice/signin";


export const store = configureStore({
    reducer: {
        signup: signup,
        sign: signin
    }
})