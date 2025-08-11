import { Main_Logo } from '@/lib/svgFils'
import { CircleUser, Handbag, Heart, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Header = () => {
    return (
        <div className='sticky top-3'>
            <div className='p-5 flex items-center justify-between gap-4 shadow-lg border rounded-sm'>
                <div className='p-2 rounded-full'>
                    <Link to={'/'} className='cursor-pointer'>
                        <img src={Main_Logo} alt="main-logo" className='w-[4vw] h-[8vh] rounded-full ' />
                    </Link>
                </div>
                <div className='flex-1 px-3'>
                    <ul className='flex gap-5 items-center'>
                        <li>
                            <Link to='/' className='cursor-pointer hover:text-blue-700 hover:bg-sky-50 p-2 rounded-sm'>Home</Link></li>
                        <li>
                            <Link to='/shop' className='cursor-pointer hover:text-blue-700 hover:bg-sky-50 p-2 rounded-sm'>Shop</Link></li>
                        <li>
                            <Link to='/product' className='cursor-pointer hover:text-blue-700 hover:bg-sky-50 p-2 rounded-sm'>Products</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link className='cursor-pointer p-2' to=''><Search /></Link>
                        </li>
                        <li>
                            <Link className='cursor-pointer p-2' to='/user'><CircleUser /></Link>
                        </li>
                        <li>
                            <Link className='cursor-pointer p-2' to='/wishlist'><Heart /></Link>
                        </li>
                        <li>
                            <Link className='cursor-pointer p-2' to='/cart'><Handbag /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
