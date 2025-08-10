import { Main_Logo } from '@/lib/svgFils'
import React from 'react'

const Header = () => {
    return (
        <div className=''>
            <div className='p-5 bg-transparent flex items-center justify-between gap-4'>
                <div className='p-2'>
                    <img src={Main_Logo} alt="main-logo" className='w-[4vw] h-[8vh]' />
                </div>
                <div className='flex-1 px-3'>
                    <ul className='flex gap-5 items-center'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Products</li>
                    </ul>
                </div>
                <div>Other pages</div>
            </div>
        </div>
    )
}

export default Header
