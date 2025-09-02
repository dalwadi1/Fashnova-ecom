import React from 'react'
import Header from './header/Header'
import Footer from './footer'
import { Outlet } from 'react-router'

const MainLyout = () => {
    return (
        <>
            <div className='w-full bg-gradient-to-br from-white via-sky-100 to-sky-200'>
                <div className='max-w-[91vw] mx-auto'>
                    {/* Navbar/Header */}
                    <Header />
                    {/* outlate */}
                    <Outlet />
                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default MainLyout
