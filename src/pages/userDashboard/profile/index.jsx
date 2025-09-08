import React, { useEffect } from "react";
import { User, Mail, Phone, MapPin, Camera } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "@/redux/actions/auth.action";

const ProfilePage = () => {
    const dispatch = useDispatch()
    const { loading, user } = useSelector((state) => state.profile)

    useEffect(() => {
        dispatch(getProfile())
    }, [])
    return (
        <div className="min-h-screen bg-gray-50 p-2 flex justify-center">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                    <div className="relative">
                        <img
                            src="/assets/images/products/bg/bg4.jpg"
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-sky-200"
                        />
                        <button className="absolute bottom-2 right-2 bg-sky-600 text-white p-2 rounded-full shadow hover:bg-sky-700">
                            <Camera size={16} />
                        </button>
                    </div>
                    <h2 className="mt-4 text-xl font-bold">Rutvik Parmar</h2>
                    <p className="text-gray-500 text-xs sm:text-sm">Front-End Developer</p>

                    <div className="mt-6 w-full">
                        <div className="flex items-center gap-2 text-gray-600 mb-3 text-xs sm:text-sm">
                            <Mail size={16} /> <span>rutvik@example.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 mb-3 text-xs sm:text-sm">
                            <Phone size={16} /> <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                            <MapPin size={16} /> <span>Bhavnagar, Gujarat</span>
                        </div>
                    </div>

                    <button className="mt-6 w-full bg-sky-600 text-white py-2 text-xs sm:text-sm rounded-lg hover:bg-sky-700 transition">
                        Edit Profile
                    </button>
                </div>

                <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">
                    <h3 className="text-lg font-bold mb-4">Profile Information</h3>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs sm:text-sm font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                defaultValue="Rutvik Parmar"
                                className="w-full text-xs sm:text-sm border rounded-lg px-3 py-2 focus:ring focus:ring-sky-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs sm:text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                defaultValue="rutvik@example.com"
                                className="w-full border text-xs sm:text-sm rounded-lg px-3 py-2 focus:ring focus:ring-sky-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs sm:text-sm font-medium mb-1">Phone</label>
                            <input
                                type="text"
                                defaultValue="+91 98765 43210"
                                className="w-full text-xs sm:text-sm border rounded-lg px-3 py-2 focus:ring focus:ring-sky-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs sm:text-sm font-medium mb-1">Location</label>
                            <input
                                type="text"
                                defaultValue="Bhavnagar, Gujarat"
                                className="w-full text-xs sm:text-sm border rounded-lg px-3 py-2 focus:ring focus:ring-sky-200 outline-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block font-medium mb-1 text-xs sm:text-sm">Bio</label>
                            <textarea
                                defaultValue="Front-End Developer passionate about React and UI/UX."
                                className="w-full text-xs sm:text-sm  border rounded-lg px-3 py-2 focus:ring focus:ring-sky-200 outline-none h-24"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2 flex sm:justify-end justify-between gap-3 w-full">
                            <button
                                type="button"
                                className="px-4 py-2 rounded-lg border hover:bg-gray-100 text-xs sm:text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 text-xs sm:text-sm"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
