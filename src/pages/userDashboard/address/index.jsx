import React, { useState } from "react";
import { MapPin, Edit, Trash2, Plus } from "lucide-react";

const initialAddresses = [
    {
        id: 1,
        name: "Rutvik Parmar",
        phone: "9876543210",
        address: "123, MG Road",
        city: "Ahmedabad",
        state: "Gujarat",
        pincode: "380001",
        type: "Home",
    },
    {
        id: 2,
        name: "Rutvik Parmar",
        phone: "9876543210",
        address: "Office Complex, SG Highway",
        city: "Surat",
        state: "Gujarat",
        pincode: "395007",
        type: "Work",
    },
];

const Addresses = () => {
    const [addresses, setAddresses] = useState(initialAddresses);
    const [showForm, setShowForm] = useState(false);
    const [newAddress, setNewAddress] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        type: "Home",
    });

    const handleAdd = () => {
        if (
            !newAddress.name ||
            !newAddress.phone ||
            !newAddress.address ||
            !newAddress.city ||
            !newAddress.state ||
            !newAddress.pincode
        ) {
            alert("Please fill all fields!");
            return;
        }
        setAddresses([...addresses, { id: Date.now(), ...newAddress }]);
        setNewAddress({
            name: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
            type: "Home",
        });
        setShowForm(false);
    };

    const handleDelete = (id) => {
        setAddresses(addresses.filter((addr) => addr.id !== id));
    };

    return (
        <div className="p-2 bg-gray-50 min-h-screen rounded-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="text-sky-600" /> My Addresses
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {addresses.map((addr) => (
                    <div
                        key={addr.id}
                        className="bg-white p-4 rounded-lg shadow border border-gray-200"
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold sm:text-sm text-xs text-gray-800">{addr.type} Address</h3>
                            <div className="flex gap-2">
                                <button className="p-1 rounded bg-yellow-100 hover:bg-yellow-200">
                                    <Edit size={16} className="text-yellow-600" />
                                </button>
                                <button
                                    onClick={() => handleDelete(addr.id)}
                                    className="p-1 rounded bg-red-100 hover:bg-red-200"
                                >
                                    <Trash2 size={16} className="text-red-600" />
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-2 sm:text-sm text-xs">
                            <span className="font-semibold sm:text-sm text-xs">{addr.name}</span> ({addr.phone})
                        </p>
                        <p className="text-gray-600 sm:text-sm text-xs">{addr.address}</p>
                        <p className="text-gray-600 sm:text-sm text-xs">
                            {addr.city}, {addr.state} - {addr.pincode}
                        </p>
                    </div>
                ))}
            </div>

            <button
                onClick={() => setShowForm(!showForm)}
                className="flex sm:text-sm text-xs items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
            >
                <Plus size={18} /> {showForm ? "Close Form" : "Add New Address"}
            </button>

            {showForm && (
                <div className="mt-6 bg-white p-6 rounded-lg shadow">
                    <h3 className="font-bold mb-4 sm:text-sm text-xs">Add New Address</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={newAddress.name}
                            onChange={(e) =>
                                setNewAddress({ ...newAddress, name: e.target.value })
                            }
                            className="border p-2 rounded w-full sm:text-sm text-xs"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={newAddress.phone}
                            onChange={(e) =>
                                setNewAddress({ ...newAddress, phone: e.target.value })
                            }
                            className="border p-2 rounded w-full sm:text-sm text-xs"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            value={newAddress.address}
                            onChange={(e) =>
                                setNewAddress({ ...newAddress, address: e.target.value })
                            }
                            className="border p-2 rounded w-full sm:col-span-2 sm:text-sm text-xs"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            value={newAddress.city}
                            onChange={(e) =>
                                setNewAddress({ ...newAddress, city: e.target.value })
                            }
                            className="border p-2 rounded w-full sm:text-sm text-xs"
                        />
                        <input
                            type="text"
                            placeholder="State"
                            value={newAddress.state}
                            onChange={(e) =>
                                setNewAddress({ ...newAddress, state: e.target.value })
                            }
                            className="border p-2 rounded w-full sm:text-sm text-xs"
                        />
                        <input
                            type="text"
                            placeholder="Pincode"
                            value={newAddress.pincode}
                            onChange={(e) =>
                                setNewAddress({ ...newAddress, pincode: e.target.value })
                            }
                            className="border p-2 rounded w-full sm:text-sm text-xs"
                        />
                        <select
                            value={newAddress.type}
                            onChange={(e) =>
                                setNewAddress({ ...newAddress, type: e.target.value })
                            }
                            className="border p-2 rounded w-full sm:text-sm text-xs"
                        >
                            <option value="Home">Home</option>
                            <option value="Work">Work</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <button
                        onClick={handleAdd}
                        className="mt-4 sm:text-sm text-xs bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700"
                    >
                        Save Address
                    </button>
                </div>
            )}
        </div>
    );
};

export default Addresses;
