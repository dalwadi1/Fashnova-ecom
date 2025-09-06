import React from "react";
import { Bell, Package, Gift, ShieldAlert } from "lucide-react";

const Notifications = () => {
    const notifications = [
        {
            id: 1,
            type: "order",
            title: "Order Shipped 🚚",
            message: "Your order #ORD123 has been shipped and will be delivered soon.",
            time: "2 hours ago",
            icon: <Package className="text-sky-600" />,
        },
        {
            id: 2,
            type: "offer",
            title: "Special Offer 🎉",
            message: "Get 20% OFF on your next purchase. Limited time offer!",
            time: "Yesterday",
            icon: <Gift className="text-pink-600" />,
        },
        {
            id: 3,
            type: "security",
            title: "Password Changed 🔒",
            message: "Your account password was updated successfully.",
            time: "2 days ago",
            icon: <ShieldAlert className="text-red-600" />,
        },
    ];

    return (
        <div className="p-2 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Bell className="text-sky-600" /> Notifications
            </h2>

            {notifications.length > 0 ? (
                <div className="space-y-4">
                    {notifications.map((note) => (
                        <div
                            key={note.id}
                            className="bg-white p-4 rounded-lg shadow flex gap-4 items-start border-l-4 border-sky-600"
                        >
                            <div className="p-2 bg-sky-50 rounded-full sm:text-sm text-xs">{note.icon}</div>
                            <div className="flex-1">
                                <h3 className="font-semibold sm:text-sm text-xs">{note.title}</h3>
                                <p className="text-gray-600 sm:text-sm text-xs">{note.message}</p>
                                <p className="text-gray-400 mt-1 sm:text-sm text-xs">{note.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow text-center">
                    <Bell className="mx-auto text-gray-400 mb-2" size={40} />
                    <p className="text-gray-600">No notifications yet</p>
                </div>
            )}
        </div>
    );
};

export default Notifications;
