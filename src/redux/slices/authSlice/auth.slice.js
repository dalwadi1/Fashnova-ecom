// auth.slice.js
import { createSlice } from "@reduxjs/toolkit";
import { userLogIn, Registeration, getProfile, ManageProfile } from "@/redux/actions/auth.action";

const initialState = {
    loading: false,
    user: localStorage.getItem("user") || null,
    success: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.loading = false;
            state.user = null;
            state.success = false;
            state.error = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        // LOGIN
        builder
            .addCase(userLogIn.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(userLogIn.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.success = true;

                if (action.payload.success) {
                    localStorage.setItem("user", JSON.stringify(action.payload.user));
                    localStorage.setItem("token", action.payload.token);
                }
            })
            .addCase(userLogIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // REGISTER
        builder
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

        // GET PROFILE
        builder
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

        //UPDATE PROFILE
        builder
            .addCase(ManageProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(ManageProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.success = true;
            })
            .addCase(ManageProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
