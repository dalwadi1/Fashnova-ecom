import React, { useState } from "react";
import { Outlet, NavLink, useLocation, Link, useNavigate } from "react-router";
import {
    BadgeIndianRupee,
    Bell,
    CalendarArrowUp,
    ChevronLeft,
    Heart,
    LogOut,
    Menu,
    NotebookTabs,
    ShieldAlert,
    ShoppingBag,
    Undo2,
    User,
    UserPen,
} from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Footer from "../mainLayout/footer";
import Logout from "@/pages/userDashboard/logout";

const userRoutes = [
    { path: "/user", label: "User", icon: <User /> },
    { path: "/user/profile", label: "Profile", icon: <UserPen /> },
    { path: "/user/orders", label: "My Orders", icon: <CalendarArrowUp /> },
    { path: "/user/wishlist", label: "My Wishlist", icon: <Heart /> },
    { path: "/user/cart", label: "My Cart", icon: <ShoppingBag /> },
    { path: "/user/addresses", label: "Addresses", icon: <NotebookTabs /> },
    { path: "/user/payments", label: "Payments", icon: <BadgeIndianRupee /> },
    { path: "/user/returns", label: "Returns", icon: <Undo2 /> },
    { path: "/user/notifications", label: "Notifications", icon: <Bell /> },
    { path: "/user/security", label: "Security", icon: <ShieldAlert /> },
];

const UserLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false)

    const activeCategory = location.state || "";

    const handleNavigate = (category, label) => {
        navigate(category, { state: label });
        setOpen(false);
    };

    const handleLogout = () => {
        setOpenDialog(true)
    }

    const handleClose = () => {
        setOpenDialog(false)
    }
    return (
        <div className="min-h-screen mx-auto">
            <div className="hidden sm:flex items-center bg-sky-100 p-4 rounded-lg sm:my-2 sticky top-1">
                <div className="flex-1 flex flex-col gap-1 items-center">
                    <h2 className="text-lg font-bold text-center">Welcome back, Rutvik 👋</h2>
                    <p className="text-sm text-gray-600 text-center">
                        Manage your profile, orders, wishlist and more from your dashboard.
                    </p>
                    <Link className="items-center text-sm text-blue-400 flex gap-1" to={'/'}><Undo2 size={18} />Continue Shopping...</Link>
                </div>
            </div>
            <div className="flex items-start gap-1 sm:my-2">
                <div className="flex w-full gap-2">
                    <div className="hidden py-3 sm:flex items-start justify-start gap-2 px-2 w-[24vw] bg-sky-100 shadow">
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex items-center w-full bg-sky-50">
                                <img
                                    src="/assets/images/products/bg/bg4.jpg"
                                    alt="user"
                                    className="max-w-[8vw] max-h-[8vh] rounded-full"
                                />
                                <div className="px-3 rounded-sm py-3">
                                    <p className="text-sm">Hello,</p>
                                    <h4 className="text-sm font-bold">Rutvik Parmar</h4>
                                </div>
                            </div>

                            <div className="w-full bg-sky-50 max-h-[75vh]">
                                <ul className="flex flex-col gap-2 py-2">
                                    {userRoutes.map((route, i) => (
                                        <li key={i}>
                                            <NavLink
                                                to={route.path}
                                                className={({ isActive }) =>
                                                    `py-1 px-2 font-semibold flex gap-2 items-center transition ${isActive
                                                        ? "text-sky-900 bg-sky-200 rounded-md"
                                                        : "text-gray-500 hover:text-sky-700"
                                                    }`
                                                }
                                            >
                                                {route.icon}
                                                {route.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center w-full bg-sky-50 cursor-pointer" onClick={handleLogout}>
                                <button className="flex p-2 gap-2 text-gray-500 cursor-pointer">
                                    <LogOut /> Logout
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-2 w-full">
                        {location.pathname === "/user" ? (
                            <>
                                <div className="sm:hidden mb-2 flex items-center justify-between bg-sky-100 sm:p-4 py-4 sticky z-50 top-2 px-1 rounded-sm w-full">
                                    <div className="flex" onClick={() => navigate("/")}>
                                        <p className="text-xs flex items-center">
                                            <ChevronLeft size={18} /> Continue Shopping...
                                        </p>
                                    </div>
                                    <Sheet open={open} onOpenChange={setOpen}>
                                        <SheetTrigger asChild>
                                            <button className="cursor-pointer hover:text-pink-600 hover:bg-pink-50 p-2 rounded-sm">
                                                <Menu size={18} />
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

                                            <ul className="grid grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
                                                {userRoutes.map((category) => (
                                                    <li
                                                        key={category?.id}
                                                        onClick={() => handleNavigate(category?.path, category?.label)}
                                                        className={`cursor-pointer flex flex-col items-center text-center p-2 rounded-md border hover:shadow-md transition ${activeCategory === category?.name
                                                            ? "border-pink-500 text-pink-600 font-semibold"
                                                            : "border-gray-200"
                                                            }`}
                                                    >
                                                        {category?.icon}
                                                        <span className="text-xs sm:text-sm">{category?.label}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </SheetContent>
                                    </Sheet>
                                </div>
                                <div className="">
                                    <div className="flex-1 bg-sky-100 py-2 sm:hidden mb-2">
                                        <h2 className="text-lg font-bold text-center">Welcome back, Rutvik 👋</h2>
                                        <p className="text-sm text-gray-600 text-center">
                                            Manage your profile, orders, wishlist and more from your dashboard.
                                        </p>
                                    </div>
                                    <div className="flex sm:flex-row flex-col gap-2 items-center justify-center w-full">
                                        <div className="bg-sky-50 p-4 rounded-lg shadow flex flex-col items-center w-full">
                                            <CalendarArrowUp className="mb-2" />
                                            <p className="text-lg font-bold">12</p>
                                            <p className="text-sm text-gray-500">Orders</p>
                                        </div>
                                        <div className="bg-sky-50 p-4 rounded-lg shadow flex flex-col items-center w-full">
                                            <Heart className="mb-2" />
                                            <p className="text-lg font-bold">5</p>
                                            <p className="text-sm text-gray-500">Wishlist</p>
                                        </div>
                                        <div className="bg-sky-50 p-4 rounded-lg shadow flex flex-col items-center w-full">
                                            <ShoppingBag className="mb-2" />
                                            <p className="text-lg font-bold">3</p>
                                            <p className="text-sm text-gray-500">Cart Items</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="w-full">
                                <div className="sm:hidden mb-2 flex items-center justify-between bg-sky-100 sm:p-4 py-4 sticky z-50 top-2 px-1 rounded-sm w-full">
                                    <div className="flex" onClick={() => navigate("/")}>
                                        <p className="text-xs flex items-center">
                                            <ChevronLeft size={18} /> Continue Shopping...
                                        </p>
                                    </div>
                                    <Sheet open={open} onOpenChange={setOpen}>
                                        <SheetTrigger asChild>
                                            <button className="cursor-pointer hover:text-pink-600 hover:bg-pink-50 p-2 rounded-sm">
                                                <Menu size={18} />
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

                                            <ul className="grid grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
                                                {userRoutes.map((category) => (
                                                    <li
                                                        key={category?.id}
                                                        onClick={() => handleNavigate(category?.path, category?.label)}
                                                        className={`cursor-pointer flex flex-col items-center text-center p-2 rounded-md border hover:shadow-md transition ${activeCategory === category?.name
                                                            ? "border-pink-500 text-pink-600 font-semibold"
                                                            : "border-gray-200"
                                                            }`}
                                                    >
                                                        {category?.icon}
                                                        <span className="text-xs sm:text-sm">{category?.label}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </SheetContent>
                                    </Sheet>
                                </div>
                                <Outlet />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
            {
                openDialog && <Logout open={openDialog} handleClose={handleClose} />
            }
        </div>
    );
};

export default UserLayout;
