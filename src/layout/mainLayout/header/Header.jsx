import { Main_Logo } from '@/lib/svgFils'
import { CircleUser, Handbag, Heart, Menu, Search, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'

const Header = () => {
    const location = useLocation()
    const [showManus, setShowManues] = useState(false)

    useEffect(() => {
        setShowManues(false)
    }, [location])
    return (
        <div className='sticky top-3 z-10 bg-white'>
            <div className='p-2 flex items-center justify-between gap-4 shadow-lg border rounded-sm bg-white'>
                <div className='sm:p-2 rounded-full'>
                    <Link to={'/'} className='cursor-pointer'>
                        <img src={Main_Logo} alt="main-logo" className='max-w-[10vw] max-h-[8vh] rounded-full ' />
                    </Link>
                </div>
                <div className='px-3 md:hidden' onClick={() => setShowManues(!showManus)}>
                    <ul className='flex gap-5 items-center'>
                        <li>
                            <button className='cursor-pointer hover:text-blue-700 hover:bg-sky-50 p-2 rounded-sm'>
                                {showManus ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </li>
                    </ul>
                </div>

                <div className='flex-1 px-3 sm:flex hidden'>
                    <ul className='flex gap-5 items-center'>
                        <li>
                            <Link to='/' className='cursor-pointer hover:text-blue-700 hover:bg-sky-50 p-2 rounded-sm'>Home</Link></li>
                        <li>
                            <Link to='/shop' className='cursor-pointer hover:text-blue-700 hover:bg-sky-50 p-2 rounded-sm'>Shop</Link></li>
                        <li>
                            <Link to='/product' className='cursor-pointer hover:text-blue-700 hover:bg-sky-50 p-2 rounded-sm'>Products</Link></li>
                    </ul>
                </div>
                <div className='sm:flex hidden'>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link className='cursor-pointer p-2' to=''><Search size={20} /></Link>
                        </li>
                        <li>
                            <Link className='cursor-pointer p-2' to='/user'><CircleUser size={20} /></Link>
                        </li>
                        <li>
                            <Link className='cursor-pointer p-2' to='/wishlist'><Heart size={20} /></Link>
                        </li>
                        <li>
                            <Link className='cursor-pointer p-2' to='/cart'><Handbag size={20} /></Link>
                        </li>
                    </ul>
                </div>
            </div>
            {
                showManus && <div className='flex flex-col items-center justify-between gap-3 py-3'>
                    <ul className='flex flex-col gap-1 items-center'>
                        <li>
                            <Link to='/' className='cursor-pointer hover:text-blue-700 hover:bg-sky-50 p-2 rounded-sm sm:text-sm text-xs'>Home</Link></li>
                        <li>
                            <Link to='/shop' className='cursor-pointer hover:text-blue-700 hover:bg-sky-50 p-2 rounded-sm sm:text-sm text-xs'>Shop</Link></li>
                        <li>
                            <Link to='/product' className='cursor-pointer hover:text-blue-700 hover:bg-sky-50 p-2 rounded-sm sm:text-sm text-xs'>Products</Link></li>
                    </ul>
                    <ul className='flex items-center gap-3'>
                        <li>
                            <Link className='cursor-pointer' to=''><Search /></Link>
                        </li>
                        <li>
                            <Link className='cursor-pointer' to='/user'><CircleUser /></Link>
                        </li>
                        <li>
                            <Link className='cursor-pointer' to='/wishlist'><Heart /></Link>
                        </li>
                        <li>
                            <Link className='cursor-pointer' to='/cart'><Handbag /></Link>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Header
