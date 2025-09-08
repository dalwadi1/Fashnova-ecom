import { configureStore } from "@reduxjs/toolkit";
import signup from "./slices/authSlice/signup";
import signin from "./slices/authSlice/signin";
import profileSlice from "./slices/authSlice/userProfile";


export const store = configureStore({
    reducer: {
        signup: signup,
        sign: signin,
        profile: profileSlice,
    }
})