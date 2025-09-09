import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/authSlice/auth.slice";


export const store = configureStore({
    reducer: {
        userDetails: userSlice
    }
})