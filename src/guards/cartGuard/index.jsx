import { Outdent } from 'lucide-react';
import React from 'react'
import { Navigate, Outlet } from 'react-router';
import UnAuthCart from '@/errorPage/UnAuthCart';

const CartGuard = () => {
    const user = JSON.parse(localStorage.getItem('user')) || null;

    if (!user) {
        return <UnAuthCart />
    }

    return <Outlet />
}

export default CartGuard
