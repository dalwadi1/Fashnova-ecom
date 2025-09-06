import React from "react";
import { Package, Truck, XCircle } from "lucide-react";

const orders = [
    {
        id: "#ORD12345",
        date: "02 Sep 2025",
        status: "Delivered",
        total: "₹2,499",
        items: [
            {
                name: "Men's Denim Jacket",
                image: "/assets/images/products/bg/bg4.jpg",
                qty: 1,
                price: "₹1,499",
            },
            {
                name: "Casual Sneakers",
                image: "/assets/images/products/bg/bg6.jpg",
                qty: 1,
                price: "₹1,000",
            },
        ],
    },
    {
        id: "#ORD12346",
        date: "01 Sep 2025",
        status: "Shipped",
        total: "₹1,200",
        items: [
            {
                name: "Women's Kurti",
                image: "/assets/images/products/bg/bg5.jpg",
                qty: 2,
                price: "₹600",
            },
        ],
    },
    {
        id: "#ORD12347",
        date: "28 Aug 2025",
        status: "Cancelled",
        total: "₹899",
        items: [
            {
                name: "Cotton T-Shirt",
                image: "/assets/images/products/bg/bg3.jpg",
                qty: 1,
                price: "₹899",
            },
        ],
    },
];

const MyOrders = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-2">
            <h2 className="text-2xl font-bold mb-6">My Orders</h2>
            <div className="grid gap-6">
                {orders.map((order, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow p-6 border hover:shadow-lg transition"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 mb-4">
                            <div>
                                <p className="text-gray-500 sm:text-sm text-xs">Order ID</p>
                                <h3 className="font-semibold sm:text-sm text-xs">{order.id}</h3>
                                <p className="text-gray-500 sm:text-sm text-xs">{order.date}</p>
                            </div>
                            <div className="mt-2 sm:mt-0">
                                <span
                                    className={`px-3 py-1 sm:text-sm text-xs rounded-full font-medium ${order.status === "Delivered"
                                        ? "bg-green-100 text-green-700"
                                        : order.status === "Shipped"
                                            ? "bg-blue-100 text-blue-700"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {order.status}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {order.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-md object-cover"
                                        />
                                        <div>
                                            <h4 className="font-medium sm:text-sm text-xs">{item.name}</h4>
                                            <p className="sm:text-sm text-xs text-gray-500">
                                                Qty: {item.qty} × {item.price}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="font-semibold sm:text-sm text-xs">{item.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 border-t pt-4">
                            <p className="font-bold sm:text-sm text-xs">Total: {order.total}</p>
                            <div className="flex gap-3 mt-3 sm:mt-0">
                                {order.status === "Shipped" && (
                                    <button className="flex sm:text-sm text-xs items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                        <Truck size={16} /> Track Order
                                    </button>
                                )}
                                {order.status === "Delivered" && (
                                    <button className="flex sm:text-sm text-xs items-center gap-1 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
                                        <Package size={16} /> View Invoice
                                    </button>
                                )}
                                {order.status === "Shipped" && (
                                    <button className="flex sm:text-sm text-xs items-center gap-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                                        <XCircle size={16} /> Cancel
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
