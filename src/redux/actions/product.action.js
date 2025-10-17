import api from "@/config/api";
import { createAsyncThunk } from "@reduxjs/toolkit";


//Get Products
export const getProducts = createAsyncThunk(
    "user/getProducts",
    async (values, { rejectWithValue }) => {
        try {
            const res = await api.get("/products", values);
            // if (res.data.success) {
            //     toast.success(res.data.msg)
            // } else {
            //     toast.error(res.data.msg)
            // }
            return res.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            }
            return rejectWithValue("Something went wrong! Please try again.");
        }
    }
);

