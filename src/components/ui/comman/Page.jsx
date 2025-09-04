import { Briefcase, CreditCard, Headphones, ShieldHalf } from 'lucide-react'
import React from 'react'

const Page = () => {
    return (

        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 py-4 gap-2'>
            <div className='flex items-center px-2 gap-2'>
                <div><Briefcase size={28} /></div>
                <div>
                    <h5 className='sm:text-sm text-xs'>Free Shipping</h5>
                    <p className='sm:text-sm text-xs'>Capped at $10 per order</p>
                </div>
            </div>
            <div className='flex items-center px-2 gap-2'>
                <div><CreditCard size={28} /></div>
                <div>
                    <h5 className='sm:text-sm text-xs'>Free Shipping</h5>
                    <p className='sm:text-sm text-xs'>Capped at $10 per order</p>
                </div>
            </div>
            <div className='flex items-center px-2 gap-2'>
                <div><ShieldHalf size={30} /></div>
                <div>
                    <h5 className='sm:text-sm text-xs'>Free Shipping</h5>
                    <p className='sm:text-sm text-xs'>Capped at $10 per order</p>
                </div>
            </div>
            <div className='flex items-center px-2 gap-2'>
                <div><Headphones size={30} /></div>
                <div>
                    <h5 className='sm:text-sm text-xs'>Free Shipping</h5>
                    <p className='sm:text-sm text-xs'>Capped at $10 per order</p>
                </div>
            </div>
        </div>
    )
}

export default Page
