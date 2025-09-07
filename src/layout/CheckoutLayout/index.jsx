import React from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import { Main_Logo1 } from '@/lib/svgFils'
import { MoveLeft, Search } from 'lucide-react'

const CheckoutLayout = () => {
    const location = useLocation();

    const stepMap = {
        "/cart": null,
        "/check-address": { prev: "/cart", label: "My Cart" },
        "/payment": { prev: "/check-address", label: "Address" },
        "/confirmation": { prev: "/payment", label: "Payment" },
    };

    const current = stepMap[location.pathname];
    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-white via-sky-100 to-sky-200'>
            <div className='sticky top-1 z-10 bg-white mb-4'>
                <div className='flex items-center justify-between sm:px-10 px-2 shadow-lg rounded-sm bg-white border'>
                    <div className='hidden sm:flex items-center justify-between'>
                        <div className='rounded-full flex items-center justify-center mb-1'>
                            <Link to={'/'} className='cursor-pointer flex items-center justify-center'>
                                <img src={Main_Logo1} alt="main-logo" className='h-10 w-10 rounded-full bg-transparent' />
                            </Link>
                        </div>
                    </div>
                    <div className="sm:hidden flex items-center justify-between p-2 border-b">
                        {current ? (
                            <Link
                                to={current.prev}
                                className="flex items-center gap-2 text-sky-600"
                            >
                                <MoveLeft size={18} />
                                <span>{current.label}</span>
                            </Link>
                        ) : (
                            <h2 className="flex items-center gap-2">
                                <span className="text-sky-600">My Cart</span>
                            </h2>
                        )}
                    </div>
                    <div className='w-[60vw] hidden sm:flex relative px-4'>
                        <input type="text" placeholder='search here...' className='bg-sky-50 w-full p-4 pl-[28px] rounded-sm' />
                        <Search size={25} className='absolute top-4 pl-[4px]' />
                    </div>
                    <div className='flex'>
                        <ul className='flex items-center gap-2'>
                            <li>
                                <Link className='cursor-pointer p-1' to='/user'>
                                    <img
                                        src="/assets/gif/user_logo.jpg"
                                        alt="Cart Animation"
                                        className="w-9 h-9 rounded-full"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='max-w-[91vw] mx-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default CheckoutLayout
