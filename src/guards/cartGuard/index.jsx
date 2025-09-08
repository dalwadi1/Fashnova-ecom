import React from "react";
import { Outlet } from "react-router";
import UnAuthCart from "@/errorPage/UnAuthCart";

const CartGuard = () => {
    const user = localStorage.getItem("user") || null;

    if (!user) {
        return <UnAuthCart />;
    }

    return <Outlet />;
};

export default CartGuard;
