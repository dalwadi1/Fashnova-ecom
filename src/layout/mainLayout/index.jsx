import React from 'react'
import Header from './header/Header'
import Footer from './footer'
import { Outlet } from 'react-router'

const MainLyout = () => {
    return (
        <>
            <div className='w-full min-h-screen bg-gradient-to-br from-white via-sky-100 to-sky-200'>
                {/* Navbar/Header */}
                <Header />
                <div className='max-w-[91vw] mx-auto'>
                    {/* outlate */}
                    <Outlet />
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default MainLyout
