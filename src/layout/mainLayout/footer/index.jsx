import { Main_Logo } from '@/lib/svgFils'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 px-5 bg-sky-50 py-5 shadow-lg border rounded-sm'>
            <div className='flex flex-col sm:gap-3 gap-2'>
                <Link to={'/'} className='cursor-pointer'>
                    <img src={Main_Logo} alt="main-logo" className='min-w-[4vw] h-[8vh] rounded-full ' />
                </Link>
                <p className='sm:text-sm text-xs'>127, Ameethara society, Nana Varachha, Surat-395006</p>
                <h5 className='sm:text-sm text-xs'>+91 8141971499</h5>
                <p className='sm:text-sm text-xs'>help@shoppers.com</p>
                <div className='flex gap-1'>
                    <Facebook size={18} />
                    <Twitter size={18} />
                    <Youtube size={18} />
                    <Instagram size={18} />
                    <Linkedin size={18} />
                </div>
            </div>
            <div className='flex flex-col gap-2 items-start'>
                <div className='h-[4vw] flex items-center justify-center'>
                    <p className='text-sm font-medium'>SUPPORTS</p>
                </div>
                <ul className='flex flex-col sm:gap-3 gap-1'>
                    <li className=''>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950 sm:text-sm text-xs'>FAQ</Link>
                    </li>
                    <li className=''>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950 sm:text-sm text-xs'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950 sm:text-sm text-xs'>Return Policy</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950 sm:text-sm text-xs'>Terms & Conditions</Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-2 items-start'>
                <div className='h-[4vw] flex items-center justify-center'>
                    <p className='text-sm font-medium'>SHOP</p>
                </div>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950 sm:text-sm text-xs'>Men's Shopping</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950 sm:text-sm text-xs'>Women's Shoppings</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950 sm:text-sm text-xs'>kids's Shoppings</Link>
                    </li>
                </ul>
            </div>
            {/* <div className='flex flex-col gap-2 items-start'>
                <div className='h-[4vw] flex items-center justify-center'>
                    <p className='text-sm font-medium'>COMPANY</p>
                </div>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950 sm:text-sm text-xs'>About</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950 sm:text-sm text-xs'>Blog</Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-2 items-start'>
                <div className='h-[4vw] flex items-center justify-center'>
                    <p className='text-sm font-medium'>SUBSCRIBE</p>
                </div>
            </div > */}
        </div >
    )
}

export default Footer
