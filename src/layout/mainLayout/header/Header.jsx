import { Main_Logo, Main_Logo1 } from '@/lib/svgFils'
import { CircleUser, Handbag, Heart, Menu, Search, ShoppingCart, UserRound } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import MiniNav from '@/pages/homePages/home/MiniNav'
import { shirtLogo } from '@/lib/images'

const categories = [
    { id: 1, name: "Jeans", image: '/assets/images/homePage/jeans.jpg' },
    { id: 2, name: "Shirts", image: '/assets/images/homePage/shirt.jpg' },
    { id: 3, name: "T-Shirt", image: '/assets/images/homePage/tshirt.jpg' },
    { id: 4, name: "Night-Wears", image: '/assets/images/homePage/nightwear.jpg' },
    { id: 5, name: "Pents", image: '/assets/images/homePage/jeans.jpg' },
    { id: 6, name: "Cargo", image: '/assets/images/homePage/cargo.jpg' }
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const activeCategory = location.state || "";

    const handleNavigate = (category) => {
        navigate("/shop", { state: category });
        setOpen(false);
    };
    return (
        <div className='sticky top-1 z-10 bg-white'>
            <div className='sm:py-2 flex items-center sm:flex-row flex-col justify-between sm:px-10 px-2 shadow-lg rounded-sm bg-white border'>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center justify-between'>
                        <div className="md:hidden">
                            <Sheet open={open} onOpenChange={setOpen} className='bg-sky-50'>
                                <SheetTrigger asChild>
                                    <button className="cursor-pointer hover:text-blue-700 hover:bg-sky-50 p-2 rounded-sm">
                                        <Menu size={24} />
                                    </button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-full h-full bg-sky-50" hideCloseButton>
                                    <SheetHeader>
                                        <SheetTitle className='text-sm sm:text-lg'>Shiv Kids Fashion</SheetTitle>
                                    </SheetHeader>

                                    <ul className="flex flex-col items-start px-2 max-h-[80vh] overflow-y-scroll justify-center h-full">
                                        {categories.map((category) => (
                                            <li
                                                key={category?.id}
                                                className={`text-sm py-2 cursor-pointer transition ${activeCategory === category?.name
                                                    ? "text-blue-600 font-semibold underline"
                                                    : "hover:underline"
                                                    }`}
                                                onClick={() => handleNavigate(category?.name)}
                                            >
                                                <div className='flex flex-col items-start justify-center gap-1'>
                                                    <div className="flex flex-col items-center justify-center">
                                                        <img src={category?.image} alt="shirt" className="max-w-[15vw] max-h-[15vh] rounded-full" />
                                                    </div>
                                                    <div className='text-start'>{category?.name}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </SheetContent>
                            </Sheet>
                        </div>

                        <div className='sm:p-2 rounded-full flex items-center justify-center mb-1'>
                            <Link to={'/'} className='cursor-pointer flex items-center justify-center'>
                                <img src={Main_Logo1} alt="main-logo" className='h-19 w-19 rounded-full bg-transparent' />
                            </Link>
                        </div>
                    </div>


                    <div className='w-[60vw] hidden sm:flex relative px-4'>
                        <input type="text" placeholder='search here...' className='bg-sky-50 w-full p-4 pl-[28px] rounded-sm' />
                        <Search size={25} className='absolute top-4 pl-[4px]' />
                    </div>

                    <div className='flex'>
                        <ul className='flex items-center gap-4'>
                            <li>
                                <Link className='cursor-pointer p-1' to='/user'><UserRound size={22} /></Link>
                            </li>
                            <li>
                                <Link className='cursor-pointer p-1' to='/cart'><ShoppingCart size={22} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-full sm:hidden flex relative mb-2 border rounded-sm'>
                    <input type="text" placeholder='search here...' className='bg-sky-50 w-full p-1 pl-[28px] rounded-sm' />
                    <Search size={23} className='absolute top-1 pl-[4px] text-xs' />
                </div>
            </div>
            <div className='hidden sm:flex w-full items-center justify-between'>
                <MiniNav />
            </div>
        </div>
    )
}

export default Header
