import React from "react";
import { ShoppingCart, Trash2, Heart } from "lucide-react";

const wishlistItems = [
    {
        id: 1,
        name: "Classic Denim Jacket",
        price: "₹1,499",
        image: "/assets/images/products/bg/bg4.jpg",
    },
    {
        id: 2,
        name: "Printed Kurti",
        price: "₹799",
        image: "/assets/images/products/bg/bg5.jpg",
    },
    {
        id: 3,
        name: "Casual Sneakers",
        price: "₹1,299",
        image: "/assets/images/products/bg/bg6.jpg",
    },
];

const Wishlist = () => {
    return (
        <div className="bg-gray-50 p-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Heart className="text-red-500" /> My Wishlist
            </h2>
            {wishlistItems.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {wishlistItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition"
                        >

                            <div className="relative w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="max-h-44 object-cover rounded-lg"
                                />
                                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-red-100">
                                    <Trash2 className="text-red-500" size={18} />
                                </button>
                            </div>

                            <div className="flex flex-col mt-3 flex-1">
                                <h3 className="font-semibold sm:text-sm text-xs text-gray-800">{item.name}</h3>
                                <p className="text-sky-700 font-bold sm:text-sm text-xs">{item.price}</p>
                            </div>

                            <button className="mt-3 sm:text-sm text-xs flex items-center justify-center gap-2 bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition">
                                <ShoppingCart size={18} /> Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center bg-white p-10 rounded-lg shadow">
                    <Heart size={40} className="mx-auto text-red-500 mb-3" />
                    <h3 className="sm:text-lg text-xs font-semibold">Your Wishlist is Empty</h3>
                    <p className="text-gray-500 mt-2 sm:text-sm text-xs">
                        Browse our products and add your favorites to wishlist!
                    </p>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
