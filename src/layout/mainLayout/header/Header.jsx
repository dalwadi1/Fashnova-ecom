import { Main_Logo } from '@/lib/svgFils'
import { CircleUser, Handbag, Heart, Menu, Search, ShoppingCart, UserRound } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import MiniNav from '@/pages/homePages/home/MiniNav'

const categories = [
    "Jeans",
    "Trousers",
    "Joggers",
    "Casual",
    "Formal",
    "Printed",
    "Polo",
    "Graphic Tees",
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
                            <Sheet open={open} onOpenChange={setOpen}>
                                <SheetTrigger asChild>
                                    <button className="cursor-pointer hover:text-blue-700 hover:bg-sky-50 p-2 rounded-sm">
                                        <Menu size={24} />
                                    </button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-64 h-full" hideCloseButton>
                                    <ul className="flex flex-col items-start px-12 justify-center h-full">
                                        {categories.map((category) => (
                                            <li
                                                key={category}
                                                className={`text-sm py-2 cursor-pointer transition ${activeCategory === category
                                                    ? "text-blue-600 font-semibold underline"
                                                    : "hover:underline"
                                                    }`}
                                                onClick={() => handleNavigate(category)}
                                            >
                                                {category}
                                            </li>
                                        ))}
                                    </ul>
                                </SheetContent>
                            </Sheet>
                        </div>

                        <div className='sm:p-2 rounded-full'>
                            <Link to={'/'} className='cursor-pointer'>
                                <img src={Main_Logo} alt="main-logo" className='max-w-[9vw] max-h-[7vh] rounded-full ' />
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
