import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Slider } from '@/components/ui/slider'
import { shop_banner } from '@/lib/images'
import { ChevronDown, SlidersHorizontal, TableProperties } from 'lucide-react'
import React, { useState } from 'react'
import ShopStyle1 from './ShopStyle1'
import Page from '@/components/ui/comman/Page'
import { Link, useLocation } from 'react-router'

const Shop = () => {
    const { state } = useLocation()
    const [showFilter, setShowFilter] = useState(false)
    return (
        <>
            <div className="bg-gradient-to-r rounded-sm from-blue-100 to-blue-50 py-9 overflow-hidden mb-3">
                <div className='relative flex items-center justify-center py-8'>
                    <div className='flex flex-col gap-2 items-center justify-center absolute'>
                        <h4 className='sm:text-2xl text-sm sm:font-bold text-gray-600'>{state}</h4>
                        <div className=''>
                            <ul className='flex items-center gap-1'>
                                <li className='sm:text-sm text-xs'><Link to={'/'} className='cursor-pointer'>Home</Link></li>
                                <span>/</span>
                                <li className='sm:text-sm text-xs cursor-pointer'>Shop</li>
                                <span>/</span>
                                <li className='sm:text-sm text-xs cursor-pointer'>{state}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:hidden flex items-center justify-between px-2 gap-5 sm:py-5'>
                <div
                    onClick={() => setShowFilter(!showFilter)}
                    className='flex gap-2 cursor-pointer sm:text-sm text-xs'>
                    <span><SlidersHorizontal size={18} /></span>filters
                </div>
                <div className='bg-sky-50 rounded-sm' >
                    <DropdownMenu className="focus:border-none">
                        <DropdownMenuTrigger className="flex items-center gap-2 justify-between cursor-pointer sm:text-sm text-xs">Short by trending <ChevronDown /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            {
                showFilter && <div className='grid sm:grid-cols-3 grid-cols-1 py-2 bg-sky-50 gap-4 px-5'>
                    <div>
                        <p className='sm:text-sm text-xs'>Choose Size</p>
                        <div className='flex flex-wrap items-center gap-2 py-3'>
                            <div className='sm:p-4 p-2 sm:w-3 text-xs sm:text-lg flex items-center justify-center rounded-sm cursor-pointer h-2 bg-sky-50 shadow-sm'>26</div>
                            <div className='sm:p-4 p-2 sm:w-3 text-xs sm:text-lg flex items-center justify-center rounded-sm cursor-pointer h-2 bg-sky-50 shadow-sm'>28</div>
                            <div className='sm:p-4 p-2 sm:w-3 text-xs sm:text-lg flex items-center justify-center rounded-sm cursor-pointer h-2 bg-sky-50 shadow-sm'>30</div>
                            <div className='sm:p-4 p-2 sm:w-3 text-xs sm:text-lg flex items-center justify-center rounded-sm cursor-pointer h-2 bg-sky-50 shadow-sm'>32</div>
                            <div className='sm:p-4 p-2 sm:w-3 text-xs sm:text-lg flex items-center justify-center rounded-sm cursor-pointer h-2 bg-sky-50 shadow-sm'>34</div>
                            <div className='sm:p-4 p-2 sm:w-3 text-xs sm:text-lg flex items-center justify-center rounded-sm cursor-pointer h-2 bg-sky-50 shadow-sm'>36</div>
                            <div className='sm:p-4 p-2 sm:w-3 text-xs sm:text-lg flex items-center justify-center rounded-sm cursor-pointer h-2 bg-sky-50 shadow-sm'>38</div>
                            <div className='sm:p-4 p-2 sm:w-3 text-xs sm:text-lg flex items-center justify-center rounded-sm cursor-pointer h-2 bg-sky-50 shadow-sm'>48</div>
                        </div>
                    </div>
                    <div>
                        <p className='sm:text-sm text-xs'>Choose Color</p>
                        <div className='flex items-center gap-2 py-3 flex-wrap'>
                            <div className='sm:p-4 p-2 sm:w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 sm:p-3 p-2 rounded-full'></div></div>
                            <div className='sm:p-4 p-2 sm:w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-green-700 sm:p-3 p-2 rounded-full'></div></div>
                            <div className='sm:p-4 p-2 sm:w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 sm:p-3 p-2 rounded-full'></div></div>
                            <div className='sm:p-4 p-2 sm:w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 sm:p-3 p-2 rounded-full'></div></div>
                            <div className='sm:p-4 p-2 sm:w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 sm:p-3 p-2 rounded-full'></div></div>
                            <div className='sm:p-4 p-2 sm:w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 sm:p-3 p-2 rounded-full'></div></div>
                            <div className='sm:p-4 p-2 sm:w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 sm:p-3 p-2 rounded-full'></div></div>
                            <div className='sm:p-4 p-2 sm:w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 sm:p-3 p-2 rounded-full'></div></div>
                        </div>
                    </div>
                    <div>
                        <p className='sm:text-sm text-xs'>Filter By Price</p>
                        <div className='sm:py-5 py-3'>
                            <Slider defaultValue={[33]} max={100} step={1} />
                        </div>
                    </div>
                </div>
            }
            <div className='sm:hidden'>
                <ShopStyle1 />
            </div>
            <div className="hidden sm:grid grid-cols-12 gap-4">
                <div className="col-span-3 bg-white p-4 rounded-lg">
                    <h2 className="font-semibold mb-3">Products Type</h2>

                    <div className="mb-4">
                        <h3 className="font-medium">Category</h3>
                        <ul className="space-y-2 text-sm">
                            <li><input type="checkbox" /> Jeans</li>
                            <li><input type="checkbox" /> Trousers</li>
                            <li><input type="checkbox" /> Polo</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-medium">Price</h3>
                        <input type="range" min="100" max="5000" className="w-full" />
                    </div>

                    <div>
                        <h3 className="font-medium">Colors</h3>
                        <div className="flex gap-2 mt-2">
                            <div className="w-6 h-6 rounded-full bg-black cursor-pointer"></div>
                            <div className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></div>
                            <div className="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></div>
                        </div>
                    </div>
                </div>

                <div className="col-span-9 bg-white p-4 rounded-lg">
                    <ShopStyle1 />
                </div>
            </div>

            <hr className='' />
            <Page />
        </>
    )
}

export default Shop
