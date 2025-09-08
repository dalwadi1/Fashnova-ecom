import { userLogIn } from "@/redux/actions/auth.action";
import { createSlice } from "@reduxjs/toolkit";

const signin = createSlice({
    name: 'signin',
    initialState: {
        loading: false,
        user: null,
        success: false
    },
    reducers: {
        logout: (state) => {
            state.loading = false;
            state.user = null;
            state.success = false;
            state.error = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    },
    extraReducers: (bilder) => {
        bilder
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
    }
})

export const { logout } = signin.actions;
export default signin.reducer;