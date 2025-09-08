import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ValidUserGaurd = () => {
    const token = localStorage.getItem('token') || null;

    if (!token) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}

export default ValidUserGaurd
