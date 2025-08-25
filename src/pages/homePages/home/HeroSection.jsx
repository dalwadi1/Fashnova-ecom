import { products } from '@/lib/images'
import React from 'react'

const HeroSection = () => {
    return (
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
            <div className="row-span-2 bg-blue-100 flex items-center justify-center">
                <div>
                    <img src={products?.bg6} alt="" className='object-cover' />
                </div>
            </div>

            <div className="bg-pink-100 flex items-center justify-center">
                <div>
                    <img src={products?.bg3} alt="" className='object-cover' />
                </div>
            </div>

            <div className="row-span-2 flex items-center justify-center">
                <div>
                    <img src={products?.bg1} alt="" className='object-cover' />
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div>
                    <img src={products?.bg4} alt="" className='object-cover' />
                </div>
            </div>
        </div>

    )
}

export default HeroSection
