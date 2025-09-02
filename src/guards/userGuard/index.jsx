import { Outdent } from 'lucide-react';
import React from 'react'
import { Navigate, Outlet } from 'react-router';

const ValidUserGaurd = () => {
    const user = JSON.parse(localStorage.getItem('user')) || null;

    if (true) {
        return <Navigate to='/unauthorize-user' />
    }

    return <Outlet />
}

export default ValidUserGaurd
