import { Main_Logo1 } from '@/lib/svgFils'
import { Menu, Search, } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import MiniNav from '@/pages/homePages/home/MiniNav'

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
    const [openCart, setOpenCart] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const activeCategory = location.state || "";

    const handleNavigate = (category) => {
        navigate("/shop", { state: category });
        setOpen(false);
    };

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Boys Blue T-Shirt",
            price: 499,
            qty: 2,
            image:
                "/assets/images/products/imag1.jpg",
        },
        {
            id: 2,
            name: "Kids Jeans",
            price: 899,
            qty: 1,
            image:
                "/assets/images/products/img2.jpg",
        },
        {
            id: 3,
            name: "Sneakers for Boys",
            price: 1199,
            qty: 1,
            image:
                "/assets/images/products/img3.jpg",
        },
    ]);

    const handleRemoveItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };
    return (
        <div className='sticky top-1 z-10 bg-white mb-3'>
            <div className='sm:py-2 flex items-center sm:flex-row flex-col justify-between sm:px-10 px-2 shadow-lg rounded-sm bg-white border'>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center justify-between'>
                        <div className="md:hidden">
                            <Sheet open={open} onOpenChange={setOpen}>
                                <SheetTrigger asChild>
                                    <button className="cursor-pointer hover:text-sky-600 hover:bg-sky-50 p-2 rounded-sm">
                                        <Menu size={28} />
                                    </button>
                                </SheetTrigger>

                                <SheetContent
                                    side="left"
                                    className="w-full h-full bg-white px-4 py-3"
                                    hideCloseButton
                                >

                                    <div className="flex items-center justify-between mb-4 border-b pb-2">
                                        <h2 className="text-lg font-bold text-sky-600">Shiv Kids Fashion</h2>
                                        <button onClick={() => setOpen(false)} className="text-gray-600 hover:text-sky-600">
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
                                                    ? "border-sky-500 text-sky-600 font-semibold"
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
                        <ul className='flex items-center gap-2'>
                            <li>
                                <Link className='cursor-pointer p-1' to='/user'>
                                    <img
                                        src="/assets/gif/user_logo.jpg"
                                        alt="Cart Animation"
                                        className="w-9 h-9 rounded-full"
                                    />
                                </Link>
                            </li>
                            {/* <li>
                                <Link className='cursor-pointer p-1' to='/cart'><ShoppingCart size={22} /></Link>
                            </li> */}
                        </ul>
                        <Sheet open={openCart} onOpenChange={setOpenCart}>
                            <SheetTrigger asChild>
                                <button className="cursor-pointer p-2 rounded-sm relative">
                                    <video
                                        src="/assets/gif/cart.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-9 h-9"
                                    />
                                    {cartItems.length > 0 && (
                                        <span className="absolute top-7 right-4 text-white bg-black font-semibold text-xs w-3 h-3 flex items-center justify-center rounded-full">
                                            {cartItems.length}
                                        </span>
                                    )}
                                </button>
                            </SheetTrigger>

                            <SheetContent
                                side="right"
                                className="w-full sm:w-[400px] h-full bg-white px-4 py-3 flex flex-col"
                                hideCloseButton
                            >
                                <div className="flex items-center justify-between mb-4 border-b pb-2">
                                    <h2 className="text-lg font-bold text-sky-600">Shiv Kids Fashion</h2>
                                    <button
                                        onClick={() => setOpenCart(false)}
                                        className="text-gray-600 hover:text-pink-600"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto space-y-4">
                                    {cartItems.length > 0 ? (
                                        cartItems.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between border-b pb-3"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-16 h-16 rounded-md object-cover"
                                                />

                                                <div className="flex-1 px-3">
                                                    <h3 className="text-sm font-semibold">{item.name}</h3>
                                                    <p className="text-xs text-gray-500">
                                                        Qty: {item.qty} × ₹{item.price}
                                                    </p>
                                                    <p className="text-sm font-bold text-sky-600">
                                                        ₹{item.qty * item.price}
                                                    </p>
                                                </div>

                                                <button
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="text-gray-400 hover:text-red-500"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-center text-gray-500">Your cart is empty</p>
                                    )}
                                </div>

                                {cartItems.length > 0 && (
                                    <div className="border-t pt-4 space-y-3">
                                        <div className="flex justify-between font-semibold text-gray-800">
                                            <span className='sm:text-sm text-xs'>Subtotal:</span>
                                            <span className='sm:text-sm text-xs'>₹{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}</span>
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => navigate('/cart')}
                                                className="w-1/2 border  border-sky-600 text-sky-600 rounded-lg py-2 hover:bg-sky-50"
                                            >
                                                My Cart
                                            </button>
                                            <button
                                                onClick={() => navigate('/checkout')}
                                                className="w-1/2 bg-sky-50 text-sky-600 rounded-lg py-2 hover:bg-sky-100"
                                            >
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </SheetContent>
                        </Sheet>
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
