import api from "@/config/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

//sign up
export const Registeration = createAsyncThunk(
    "user/signup",
    async (values, { rejectWithValue }) => {
        try {
            const res = await api.post("/register", values);
            if (res.data.success) {
                toast.success(res.data.msg)
            } else {
                toast.error(res.data.msg)
            }
            return res.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            }
            return rejectWithValue("Something went wrong! Please try again.");
        }
    }
);

//sign in
export const userLogIn = createAsyncThunk(
    "user/signin",
    async (values, { rejectWithValue }) => {
        try {
            const res = await api.post("/auth/login", values);

            if (res.data.success) {
                toast.success(res.data.msg)
            } else {
                toast.error(res.data.msg)
            }
            
            return res.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            }
            return rejectWithValue("Something went wrong! Please try again.");
        }
    }
);
