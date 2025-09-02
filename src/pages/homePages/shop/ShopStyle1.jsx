import { products } from '@/lib/images'
import { Heart } from 'lucide-react'
import React from 'react'

const ShopStyle1 = () => {
    return (
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 w-full">
            <div className="flex flex-col px-5 py-4">
                <div className="rounded-sm flex items-center justify-center">
                    <img src={products?.product1} alt="" className='max-h-[60vh] w-full' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 sm:max-w-[10vw] flex-wrap py-2'>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-green-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                    </div>
                    <div>
                        <Heart />
                    </div>
                </div>
                <p>women</p>
                <p>$123</p>
            </div>
            <div className="flex flex-col px-5 py-4">
                <div className="rounded-sm flex items-center justify-center">
                    <img src={products?.product6} alt="" className='max-h-[60vh] w-full' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 sm:max-w-[10vw] flex-wrap py-2'>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-green-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                    </div>
                    <div>
                        <Heart />
                    </div>
                </div>
                <p>women</p>
                <p>$123</p>
            </div>
            <div className="flex flex-col px-5 py-4">
                <div className="rounded-sm flex items-center justify-center">
                    <img src={products?.product2} alt="" className='max-h-[60vh] w-full' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 sm:max-w-[10vw] flex-wrap py-2'>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-green-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                    </div>
                    <div>
                        <Heart />
                    </div>
                </div>
                <p>women</p>
                <p>$123</p>
            </div>
            <div className="flex flex-col px-5 py-4">
                <div className="rounded-sm flex items-center justify-center">
                    <img src={products?.product3} alt="" className='max-h-[60vh] w-full' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 sm:max-w-[10vw] flex-wrap py-2'>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-green-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                    </div>
                    <div>
                        <Heart />
                    </div>
                </div>
                <p>women</p>
                <p>$123</p>
            </div>
            <div className="flex flex-col px-5 py-4">
                <div className="rounded-sm flex items-center justify-center">
                    <img src={products?.product4} alt="" className='max-h-[60vh] w-full' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 sm:max-w-[10vw] flex-wrap py-2'>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-green-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                    </div>
                    <div>
                        <Heart />
                    </div>
                </div>
                <p>women</p>
                <p>$123</p>
            </div>
            <div className="flex flex-col px-5 py-4">
                <div className="rounded-sm flex items-center justify-center">
                    <img src={products?.product5} alt="" className='max-h-[60vh] w-full' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 sm:max-w-[10vw] flex-wrap py-2'>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-green-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                    </div>
                    <div>
                        <Heart />
                    </div>
                </div>
                <p>women</p>
                <p>$123</p>
            </div>
            <div className="flex flex-col px-5 py-4">
                <div className="rounded-sm flex items-center justify-center">
                    <img src={products?.product6} alt="" className='max-h-[60vh] w-full' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 sm:max-w-[10vw] flex-wrap py-2'>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-green-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                    </div>
                    <div>
                        <Heart />
                    </div>
                </div>
                <p>women</p>
                <p>$123</p>
            </div>
            <div className="flex flex-col px-5 py-4">
                <div className="rounded-sm flex items-center justify-center">
                    <img src={products?.product7} alt="" className='max-h-[60vh] w-full' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 sm:max-w-[10vw] flex-wrap py-2'>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-green-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                        <div className='flex items-center justify-center rounded-full p-1 border-1 border-black cursor-pointer bg-sky-50'><div className='bg-red-700 p-1 rounded-full'></div></div>
                    </div>
                    <div>
                        <Heart />
                    </div>
                </div>
                <p>women</p>
                <p>$123</p>
            </div>
        </div>
    )
}

export default ShopStyle1
