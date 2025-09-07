import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressPage = () => {
    const navigate = useNavigate();

    const [addresses] = useState([
        {
            id: 1,
            name: "Rutvik Parmar",
            phone: "9876543210",
            pincode: "364001",
            address: "Shiv Nagar, Near Park",
            city: "Bhavnagar",
            state: "Gujarat",
            isPrimary: true,
        },
        {
            id: 2,
            name: "Other Address",
            phone: "9876541230",
            pincode: "395006",
            address: "Ring Road",
            city: "Surat",
            state: "Gujarat",
            isPrimary: false,
        },
    ]);

    const cartItems = [
        { id: 1, name: "Boys T-Shirt", price: 499, qty: 2 },
        { id: 2, name: "Kids Jeans", price: 899, qty: 1 },
    ];

    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    const handleContinue = () => {
        navigate("/payment");
    };

    return (
        <div className="bg-gray-50 p-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="md:col-span-2 bg-white shadow-md rounded-xl p-2">
                    {addresses.length > 0 ? (
                        <div className="space-y-3">
                            {addresses.map((addr) => (
                                <div
                                    key={addr.id}
                                    className={`p-4 border rounded-lg flex justify-between items-start ${addr.isPrimary
                                        ? "border-sky-500 bg-sky-50"
                                        : "border-gray-200"
                                        }`}
                                >
                                    <div>
                                        <p className="font-semibold text-xs sm:text-sm">{addr.name}</p>
                                        <p className="text-xs sm:text-sm text-gray-600">{addr.phone}</p>
                                        <p className="text-xs sm:text-sm text-gray-600">
                                            {addr.address}, {addr.city}, {addr.state} - {addr.pincode}
                                        </p>
                                        {addr.isPrimary && (
                                            <span className="text-xs bg-sky-100 text-sky-600 px-2 py-0.5 rounded mt-1 inline-block">
                                                Primary
                                            </span>
                                        )}
                                    </div>
                                    <button className="text-sky-600 font-medium text-xs sm:text-sm hover:underline">
                                        Change
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center p-6 border rounded-lg">
                            <p className="text-gray-600">No address found</p>
                            <button className="mt-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700">
                                + Add Address
                            </button>
                        </div>
                    )}
                </div>

                <div className="bg-white rounded-xl shadow p-6 h-fit">
                    <h3 className="sm:text-lg text-sm font-bold mb-4">Order Summary</h3>
                    <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600 sm:text-sm text-xs">Subtotal</span>
                        <span className="font-semibold sm:text-sm text-xs">₹1200</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600 sm:text-sm text-xs">Shipping</span>
                        <span className="font-semibold sm:text-sm text-xs text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between py-2 text-lg font-bold">
                        <span className="sm:text-sm text-xs">Total</span>
                        <span className="sm:text-sm text-xs">₹1200</span>
                    </div>

                    <button
                        onClick={handleContinue}
                        className="w-full bg-sky-600 text-white py-3 rounded-lg sm:text-sm text-xs mt-2 font-semibold hover:bg-sky-700 transition"
                    >
                        Continue →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddressPage;
