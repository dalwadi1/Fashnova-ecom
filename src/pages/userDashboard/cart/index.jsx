import React, { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";

const cartItemsData = [
    {
        id: 1,
        name: "Classic Denim Jacket",
        price: 1499,
        qty: 1,
        image: "/assets/images/products/bg/bg4.jpg",
    },
    {
        id: 2,
        name: "Printed Kurti",
        price: 799,
        qty: 2,
        image: "/assets/images/products/bg/bg5.jpg",
    },
    {
        id: 3,
        name: "Casual Sneakers",
        price: 1299,
        qty: 1,
        image: "/assets/images/products/bg/bg6.jpg",
    },
];

const Cart = () => {
    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState(cartItemsData);

    const increaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    return (
        <div className="bg-gray-50 p-2">
            {cartItems.length > 0 ? (
                <div className="grid lg:grid-cols-3 gap-2">
                    <div className="lg:col-span-2 bg-white rounded-xl shadow p-2">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between gap-4 border-b py-2"
                            >
                                <div className="flex items-center  justify-between w-full gap-4">
                                    <div className="flex gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-semibold sm:text-sm text-xs text-gray-800">
                                                {item.name}
                                            </h3>
                                            <p className="text-sky-700 font-bold sm:text-sm text-xs">₹{item.price}</p>
                                            <div className="flex items-center">
                                                <button
                                                    onClick={() => decreaseQty(item.id)}
                                                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="px-3 font-semibold sm:text-sm text-xs">{item.qty}</span>
                                                <button
                                                    onClick={() => increaseQty(item.id)}
                                                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="p-2 rounded-full bg-red-100 hover:bg-red-200"
                                    >
                                        <Trash2 className="text-red-500" size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl shadow p-6 h-fit">
                        <h3 className="sm:text-lg text-sm font-bold mb-4">Order Summary</h3>
                        <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600 sm:text-sm text-xs">Subtotal</span>
                            <span className="font-semibold sm:text-sm text-xs">₹{totalPrice}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600 sm:text-sm text-xs">Shipping</span>
                            <span className="font-semibold sm:text-sm text-xs text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between py-2 text-lg font-bold">
                            <span className="sm:text-sm text-xs">Total</span>
                            <span className="sm:text-sm text-xs">₹{totalPrice}</span>
                        </div>

                        <button className="w-full sm:text-sm text-xs mt-4 bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition" onClick={() => navigate('/check-address')}>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-center bg-white p-10 rounded-lg shadow">
                    <ShoppingBag size={40} className="mx-auto text-sky-600 mb-3" />
                    <h3 className="text-lg font-semibold">Your Cart is Empty</h3>
                    <p className="text-gray-500 text-sm mt-2">
                        Add items to your cart and they will show up here.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Cart;
