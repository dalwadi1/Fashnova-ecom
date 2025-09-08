import { getProfile, Registeration } from "@/redux/actions/auth.action";
import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        loading: false,
        user: null,
        success: false
    },
    extraReducers: (bilder) => {
        bilder
            .addCase(getProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.success = true;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export default profileSlice.reducer;