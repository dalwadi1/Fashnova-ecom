import React from 'react'
import { Navigate, Outlet } from 'react-router'

const LoginGuard = () => {
    const token = JSON.parse(localStorage.getItem('token')) || null;
    console.log(token, "ll");

    if (token) {
        return <Navigate to="/" replace />
    }
    return <Outlet />
}

export default LoginGuard
