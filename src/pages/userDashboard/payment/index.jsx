import React, { useState } from "react";
import { CreditCard, Smartphone, Banknote, Wallet } from "lucide-react";

const Payments = () => {
    const [method, setMethod] = useState("cod");
    const [card, setCard] = useState({ number: "", expiry: "", cvv: "" });

    const handlePayment = () => {
        alert(`Payment done via ${method.toUpperCase()} 🎉`);
    };

    return (
        <div className="p-2 bg-gray-50 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="font-semibold mb-4 sm:text-lg text-xs">Select Payment Method</h3>
                    <div className="flex flex-col gap-3">
                        <label
                            className={`flex items-center gap-3 p-3 border rounded cursor-pointer sm:text-sm text-xs ${method === "cod" ? "border-sky-600 bg-sky-50" : ""
                                }`}
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="cod"
                                checked={method === "cod"}
                                onChange={(e) => setMethod(e.target.value)}
                            />
                            <Banknote className="text-green-600" />
                            Cash on Delivery
                        </label>

                        <label
                            className={`flex items-center gap-3 sm:text-sm text-xs p-3 border rounded cursor-pointer ${method === "upi" ? "border-sky-600 bg-sky-50" : ""
                                }`}
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="upi"
                                checked={method === "upi"}
                                onChange={(e) => setMethod(e.target.value)}
                            />
                            <Smartphone className="text-purple-600" />
                            UPI (Google Pay / PhonePe / Paytm)
                        </label>

                        <label
                            className={`flex sm:text-sm text-xs items-center gap-3 p-3 border rounded cursor-pointer ${method === "card" ? "border-sky-600 bg-sky-50" : ""
                                }`}
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={method === "card"}
                                onChange={(e) => setMethod(e.target.value)}
                            />
                            <CreditCard className="text-blue-600" />
                            Credit / Debit Card
                        </label>

                        <label
                            className={`flex sm:text-sm text-xs items-center gap-3 p-3 border rounded cursor-pointer ${method === "wallet" ? "border-sky-600 bg-sky-50" : ""
                                }`}
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="wallet"
                                checked={method === "wallet"}
                                onChange={(e) => setMethod(e.target.value)}
                            />
                            <Wallet className="text-yellow-600" />
                            Wallet (Amazon Pay / Paytm)
                        </label>
                    </div>

                    {method === "card" && (
                        <div className="mt-6 space-y-4">
                            <input
                                type="text"
                                placeholder="Card Number"
                                value={card.number}
                                onChange={(e) => setCard({ ...card, number: e.target.value })}
                                className="border p-2 rounded w-full sm:text-sm text-xs"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    value={card.expiry}
                                    onChange={(e) =>
                                        setCard({ ...card, expiry: e.target.value })
                                    }
                                    className="border p-2 rounded w-full sm:text-sm text-xs"
                                />
                                <input
                                    type="password"
                                    placeholder="CVV"
                                    value={card.cvv}
                                    onChange={(e) => setCard({ ...card, cvv: e.target.value })}
                                    className="border p-2 rounded w-full sm:text-sm text-xs"
                                />
                            </div>
                        </div>
                    )}

                    {method === "upi" && (
                        <div className="mt-6">
                            <input
                                type="text"
                                placeholder="Enter UPI ID (e.g. rutvik@upi)"
                                className="border p-2 rounded w-full sm:text-sm text-xs"
                            />
                        </div>
                    )}
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="sm:text-lg text-sm font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                        <p className="sm:text-sm text-xs">Items (3): ₹1200</p>
                        <p className="sm:text-sm text-xs">Shipping: ₹50</p>
                        <p className="sm:text-sm text-xs">Taxes: ₹100</p>
                        <hr />
                        <p className="font-bold sm:text-sm text-xs text-gray-900">Total: ₹1350</p>
                    </div>

                    <button
                        onClick={handlePayment}
                        className="mt-6 w-full sm:text-sm text-xs bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition"
                    >
                        Pay ₹1350
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payments;
