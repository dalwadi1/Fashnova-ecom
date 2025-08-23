import { Main_Logo } from '@/lib/svgFils'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <div className='grid md:grid-cols-5  grid-cols-1 gap-5 px-5 bg-sky-50 py-5 shadow-lg border rounded-sm'>
            <div className='flex flex-col gap-4'>
                <Link to={'/'} className='cursor-pointer'>
                    <img src={Main_Logo} alt="main-logo" className='min-w-[4vw] h-[8vh] rounded-full ' />
                </Link>
                <p className=''>127, Ameethara society, Nana Varachha, Surat-395006</p>
                <h5 className=''>+91 8141971499</h5>
                <p className=''>help@shoppers.com</p>
                <div className='flex gap-5'>
                    <Facebook />
                    <Twitter />
                    <Youtube />
                    <Instagram />
                    <Linkedin />
                </div>
            </div>
            <div className='flex flex-col gap-2 items-start'>
                <div className='h-[4vw] flex items-center justify-center'>
                    <p className=''>SUPPORTS</p>
                </div>
                <ul className='flex flex-col gap-5 mt-3'>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950'>FAQ</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950'>Return Policy</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950'>Terms & Conditions</Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-2 items-start'>
                <div className='h-[4vw] flex items-center justify-center'>
                    <p>SHOP</p>
                </div>
                <ul className='flex flex-col gap-5 mt-3'>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950'>Men's Shopping</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950'>Women's Shoppings</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950'>kids's Shoppings</Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-2 items-start'>
                <div className='h-[4vw] flex items-center justify-center'>
                    <p>COMPANY</p>
                </div>
                <ul className='flex flex-col gap-5 mt-3'>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950'>About</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='cursor-pointer hover:underline hover:text-sky-950'>Blog</Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-2 items-start'>
                <div className='h-[4vw] flex items-center justify-center'>
                    <p>SUBSCRIBE</p>
                </div>
            </div >
        </div >
    )
}

export default Footer
