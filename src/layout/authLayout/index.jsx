import React from 'react'
import { Navigate, Outlet } from 'react-router';

const AuthProtectedLayout = () => {
    const Token = localStorage.getItem("token");

    if (Token) {
        return <Outlet />
    }
    return <Navigate to='/login' replace />
}

export default AuthProtectedLayout
