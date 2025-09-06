import React from 'react'
import Sidebar from './sidebar'
import Header from './header'
import { Outlet } from 'react-router'

const UserLayout = () => {
    return (
        <div className='flex items-center'>
            <Sidebar />
            <div>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default UserLayout
