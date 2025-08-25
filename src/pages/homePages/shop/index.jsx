import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Slider } from '@/components/ui/slider'
import { shop_banner } from '@/lib/images'
import { Briefcase, ChevronDown, CreditCard, Grid3x3, Headphones, LayoutGrid, ShieldHalf, SlidersHorizontal, TableProperties } from 'lucide-react'
import React, { useState } from 'react'
import ShopStyle1 from './ShopStyle1'

const Shop = () => {
    const [showFilter, setShowFilter] = useState(false)
    return (
        <>
            <div className='w-full'>
                <div className='relative flex items-center justify-center'>
                    <img
                        src={shop_banner}
                        alt="Winter Collection"
                        className="max-h-[65vh] w-full"
                    />
                    <div className='flex flex-col gap-5 items-center justify-center p-3 absolute'>
                        <h4 className='sm:text-2xl sm:font-bold'>Shop</h4>
                        <div className=''>
                            <ul className='flex items-center justify-center gap-3'>
                                <li className='text-sm cursor-pointer hover:underline hover:text-md'>Men</li>
                                <li className='text-sm cursor-pointer hover:underline hover:text-md'>Speakers</li>
                                <li className='text-sm cursor-pointer hover:underline hover:text-md'>Women</li>
                                <li className='text-sm cursor-pointer hover:underline hover:text-md'>Accessories</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-2 items-center'>
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
                            <span><SlidersHorizontal size={18} /></span>filters
                        </div>
                        <div className='bg-sky-50 p-2 rounded-sm' >
                            <DropdownMenu className="focus:border-none">
                                <DropdownMenuTrigger className="flex items-center gap-2 justify-between cursor-pointer text-sm">Short by trending <ChevronDown /></DropdownMenuTrigger>
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
                        {/* <div>
                            <ul className='flex gap-2 items-center justify-center'>
                                <li className='cursor-pointer'><Grid3x3 size={18} /></li>
                                <li className='cursor-pointer'><LayoutGrid size={18} /></li>
                                <li className='cursor-pointer'><TableProperties size={18} /></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
            {
                showFilter && <div className='grid sm:grid-cols-3 grid-cols-1 py-5 bg-sky-50 mb-2 gap-4 px-5'>
                    <div>
                        <p>Choose Size</p>
                        <div className='flex flex-wrap items-center gap-2'>
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
                        <p>Choose Color</p>
                        <div className='flex items-center gap-2 flex-wrap'>
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
                        <div className='py-5'>
                            <Slider defaultValue={[33]} max={100} step={1} />
                        </div>
                    </div>
                </div>
            }

            <ShopStyle1 />
            <hr className='' />

            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 py-4'>
                <div className='flex items-center px-2 gap-2'>
                    <div><Briefcase size={30} /></div>
                    <div>
                        <h5 className='text-sm'>Free Shipping</h5>
                        <p className='text-sm'>Capped at $10 per order</p>
                    </div>
                </div>
                <div className='flex items-center px-2 gap-2'>
                    <div><CreditCard size={30} /></div>
                    <div>
                        <h5>Free Shipping</h5>
                        <p>Capped at $10 per order</p>
                    </div>
                </div>
                <div className='flex items-center px-2 gap-2'>
                    <div><ShieldHalf size={30} /></div>
                    <div>
                        <h5>Free Shipping</h5>
                        <p>Capped at $10 per order</p>
                    </div>
                </div>
                <div className='flex items-center px-2 gap-2'>
                    <div><Headphones size={30} /></div>
                    <div>
                        <h5>Free Shipping</h5>
                        <p>Capped at $10 per order</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
