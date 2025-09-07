import { Registeration } from "@/redux/actions/auth.action";
import { createSlice } from "@reduxjs/toolkit";

const signup = createSlice({
    name: 'signup',
    initialState: {
        loading: false,
        user: null,
        success: false
    },
    extraReducers: (bilder) => {
        bilder
            .addCase(Registeration.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(Registeration.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.success = true;
            })
            .addCase(Registeration.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export default signup.reducer;