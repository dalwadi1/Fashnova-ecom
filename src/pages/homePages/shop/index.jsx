import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Slider } from '@/components/ui/slider'
import { shop_banner } from '@/lib/images'
import { ChevronDown, SlidersHorizontal, TableProperties } from 'lucide-react'
import React, { useState } from 'react'
import ShopStyle1 from './ShopStyle1'
import Page from '@/components/ui/comman/Page'

const Shop = () => {
    const [showFilter, setShowFilter] = useState(false)
    return (
        <>
            <div className='py-5'>
                <div className='relative flex items-center justify-center'>
                    <img
                        src={shop_banner}
                        alt="Winter Collection"
                        className="max-h-[65vh] w-full"
                    />
                    <div className='flex flex-col gap-5 items-center justify-center p-3 absolute'>
                        <h4 className='sm:text-2xl text-sm sm:font-bold'>Shop</h4>
                        <div className=''>
                            <ul className='flex items-center justify-center gap-3'>
                                <li className='cursor-pointer hover:underline hover:text-md text-xs'>Men</li>
                                <li className='cursor-pointer hover:underline hover:text-md text-xs'>Speakers</li>
                                <li className='cursor-pointer hover:underline hover:text-md text-xs'>Women</li>
                                <li className='cursor-pointer hover:underline hover:text-md text-xs'>Accessories</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                    <div className=''>
                        <ul className='flex items-center gap-1 p-3'>
                            <li className='sm:text-sm text-xs'>Home</li>
                            <span>/</span>
                            <li className='sm:text-sm text-xs'>Shop</li>
                            <span>/</span>
                            <li className='sm:text-sm text-xs'>Men</li>
                        </ul>
                    </div>
                    <div className='flex items-center sm:justify-end justify-between gap-5 px-5 sm:py-5'>
                        <div
                            onClick={() => setShowFilter(!showFilter)}
                            className='flex gap-2 cursor-pointer sm:text-sm text-xs'>
                            <span><SlidersHorizontal size={18} /></span>filters
                        </div>
                        <div className='bg-sky-50 p-1 rounded-sm' >
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
                </div>
            </div>
            {
                showFilter && <div className='grid sm:grid-cols-3 grid-cols-1 py-5 bg-sky-50 mb-2 gap-4 px-5'>
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

            <ShopStyle1 />
            <hr className='' />
            <Page />
        </>
    )
}

export default Shop
