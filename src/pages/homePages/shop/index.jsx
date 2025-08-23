import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Slider } from '@/components/ui/slider'
import { shop_banner } from '@/lib/images'
import { ChevronDown, Grid3x3, LayoutGrid, SlidersHorizontal, TableProperties } from 'lucide-react'
import React, { useState } from 'react'

const Shop = () => {
    const [showFilter, setShowFilter] = useState(false)
    return (
        <>
            <div className='relative w-full'>
                <div className=''>
                    <img
                        src={shop_banner}
                        alt="Winter Collection"
                        className="max-h-[65vh] w-full"
                    />
                </div>
                <div className='top-4 sm:top-[40%] sm:left-[40%] flex flex-col gap-5 items-center justify-center p-3 absolute z-50'>
                    <h4 className=''>Shop</h4>
                    <div className=''>
                        <ul className='flex items-center justify-center gap-3'>
                            <li>Men</li>
                            <li>Speakers</li>
                            <li>Women</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-2'>
                    <div className=''>
                        <ul className='flex items-center gap-1 p-3'>
                            <li>Home</li>
                            <span>/</span>
                            <li>Shop</li>
                            <span>/</span>
                            <li>Men</li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-end gap-5 px-5 py-2'>
                        <div
                            onClick={() => setShowFilter(!showFilter)}
                            className='flex gap-2 cursor-pointer'>
                            <span><SlidersHorizontal /></span>filters
                        </div>
                        <div className='bg-sky-50 p-2 rounded-sm' >
                            <DropdownMenu className="focus:border-none">
                                <DropdownMenuTrigger className="flex items-center gap-2 justify-between cursor-pointer">Short by trending <ChevronDown /></DropdownMenuTrigger>
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
                        <div>
                            <ul className='flex gap-2 items-center justify-center'>
                                <li className='cursor-pointer'><Grid3x3 /></li>
                                <li className='cursor-pointer'><LayoutGrid /></li>
                                <li className='cursor-pointer'><TableProperties /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {
                showFilter && <div className='grid grid-cols-3 py-5 bg-sky-50 mb-2'>
                    <div>
                        <p>Choose Size</p>
                        <div className='flex items-center gap-2'>
                            <div className='p-5 w-4 flex items-center justify-center rounded-sm cursor-pointer h-3 bg-sky-50'>26</div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-sm cursor-pointer h-3 bg-sky-50'>28</div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-sm cursor-pointer h-3 bg-sky-50'>30</div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-sm cursor-pointer h-3 bg-sky-50'>32</div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-sm cursor-pointer h-3 bg-sky-50'>34</div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-sm cursor-pointer h-3 bg-sky-50'>36</div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-sm cursor-pointer h-3 bg-sky-50'>38</div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-sm cursor-pointer h-3 bg-sky-50'>48</div>
                        </div>
                    </div>
                    <div>
                        <p>Choose COlor</p>
                        <div className='flex items-center gap-2'>
                            <div className='p-5 w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 p-4 rounded-full'></div></div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-green-700 p-4 rounded-full'></div></div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 p-4 rounded-full'></div></div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 p-4 rounded-full'></div></div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 p-4 rounded-full'></div></div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 p-4 rounded-full'></div></div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 p-4 rounded-full'></div></div>
                            <div className='p-5 w-4 flex items-center justify-center rounded-full cursor-pointer h-3 bg-sky-50'><div className='bg-red-700 p-4 rounded-full'></div></div>
                        </div>
                    </div>
                    <div>
                        <p>Filter By Price</p>
                        <div>
                            <Slider defaultValue={[33]} max={100} step={1} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Shop
