import React from 'react'
import { Navigate, Outlet } from 'react-router'

const LoginGuard = () => {
    const token = JSON.parse(localStorage.getItem('token')) || null;

    if (token) {
        return <Navigate to="/user" replace />
    }
    return <Outlet />
}

export default LoginGuard
