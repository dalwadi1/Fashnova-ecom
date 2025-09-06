import React, { useState } from "react";
import { Undo2, Truck, PackageOpen } from "lucide-react";

const Returns = () => {
    const [reason, setReason] = useState("");
    const [selectedOrder, setSelectedOrder] = useState(null);

    const orders = [
        {
            id: "ORD123",
            product: "Blue Denim Jacket",
            date: "2025-09-01",
            status: "Delivered",
            price: 1200,
            image: "/assets/images/products/bg/bg4.jpg",
        },
        {
            id: "ORD124",
            product: "White Cotton Shirt",
            date: "2025-08-25",
            status: "Delivered",
            price: 800,
            image: "/assets/images/products/bg/bg6.jpg",
        },
    ];

    const handleReturn = () => {
        if (!selectedOrder || !reason) {
            alert("⚠️ Please select order and reason.");
            return;
        }
        alert(`Return requested for ${selectedOrder.product} ✅`);
    };

    return (
        <div className="p-2 bg-gray-50 min-h-screen rounded-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Undo2 className="text-sky-600" /> Returns
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Left: Orders List */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Your Delivered Orders</h3>
                    <ul className="space-y-4">
                        {orders.map((order) => (
                            <li
                                key={order.id}
                                className={`p-4 border rounded-lg flex items-center gap-4 cursor-pointer transition ${selectedOrder?.id === order.id
                                    ? "border-sky-600 bg-sky-50"
                                    : "hover:border-sky-400"
                                    }`}
                                onClick={() => setSelectedOrder(order)}
                            >
                                <img
                                    src={order.image}
                                    alt={order.product}
                                    className="w-16 h-16 rounded object-cover"
                                />
                                <div className="flex-1">
                                    <p className="font-semibold">{order.product}</p>
                                    <p className="text-sm text-gray-500">
                                        Ordered on {order.date}
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        ₹{order.price} • {order.status}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Return Form */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Return Request</h3>

                    {selectedOrder ? (
                        <div>
                            <p className="mb-2 text-gray-700">
                                Returning:{" "}
                                <span className="font-bold">{selectedOrder.product}</span>
                            </p>

                            <label className="block mb-2 text-sm font-medium">
                                Select Reason:
                            </label>
                            <select
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                className="w-full border rounded p-2 mb-4"
                            >
                                <option value="">-- Select Reason --</option>
                                <option value="size">Wrong Size</option>
                                <option value="defective">Defective Item</option>
                                <option value="not-as-expected">Not as Expected</option>
                                <option value="other">Other</option>
                            </select>

                            <label className="block mb-2 text-sm font-medium">
                                Additional Comments:
                            </label>
                            <textarea
                                rows="3"
                                className="w-full border rounded p-2 mb-4"
                                placeholder="Write your comments (optional)..."
                            ></textarea>

                            <button
                                onClick={handleReturn}
                                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
                            >
                                Submit Return Request
                            </button>
                        </div>
                    ) : (
                        <p className="text-gray-500">
                            ⚠️ Please select an order from the left side to return.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Returns;
