import { Main_Logo, Main_Logo1 } from '@/lib/svgFils'
import { Menu, Search, ShoppingCart, UserRound } from 'lucide-react'
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
    { id: 3, name: "tshirts", image: '/assets/images/homePage/tshirt.jpg' },
    { id: 4, name: "nightwears", image: '/assets/images/homePage/nightwear.jpg' },
    { id: 5, name: "Pents", image: '/assets/images/homePage/jeans.jpg' },
    { id: 7, name: "cargos", image: '/assets/images/homePage/cargo.jpg' },
    { id: 8, name: "Trousers", image: '/assets/images/homePage/trousers.jpg' },
    { id: 9, name: "Formal Pents", image: '/assets/images/homePage/formal.jpg' },
    // { id: 10, name: "Cargo", image: '/assets/images/homePage/cargo.jpg' },
    // { id: 11, name: "Cargo", image: '/assets/images/homePage/cargo.jpg' },
    // { id: 12, name: "Cargo", image: '/assets/images/homePage/cargo.jpg' },
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
                                    <button className="cursor-pointer hover:text-pink-600 hover:bg-pink-50 p-2 rounded-sm">
                                        <Menu size={28} />
                                    </button>
                                </SheetTrigger>

                                <SheetContent
                                    side="left"
                                    className="w-full h-full bg-white px-4 py-3"
                                    hideCloseButton
                                >

                                    <div className="flex items-center justify-between mb-4 border-b pb-2">
                                        <h2 className="text-lg font-bold">Shiv Kids Fashion</h2>
                                        <button onClick={() => setOpen(false)} className="text-gray-600 hover:text-pink-600">
                                            ✕
                                        </button>
                                    </div>

                                    {/* <div className="relative mb-4">
                                        <input
                                            type="text"
                                            placeholder="Search for products"
                                            className="w-full border rounded-md pl-10 py-2 text-sm focus:outline-pink-500"
                                        />
                                        <Search size={18} className="absolute top-2.5 left-3 text-gray-400" />
                                    </div> */}

                                    <ul className="grid grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
                                        {categories.map((category) => (
                                            <li
                                                key={category?.id}
                                                onClick={() => handleNavigate(category?.name)}
                                                className={`cursor-pointer flex flex-col items-center text-center p-2 rounded-md border hover:shadow-md transition ${activeCategory === category?.name
                                                    ? "border-pink-500 text-pink-600 font-semibold"
                                                    : "border-gray-200"
                                                    }`}
                                            >
                                                <img
                                                    src={category?.image}
                                                    alt={category?.name}
                                                    className="w-16 h-16 rounded-full object-cover mb-1"
                                                />
                                                <span className="text-xs sm:text-sm">{category?.name}</span>
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
