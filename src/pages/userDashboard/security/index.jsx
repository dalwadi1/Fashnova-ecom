import React from "react";
import { Shield, Lock, Smartphone, Globe } from "lucide-react";

const Security = () => {
    return (
        <div className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="text-sky-600" /> Security Settings
            </h2>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="text-xs sm:text-lg font-semibold flex items-center gap-2 mb-3">
                    <Lock className="text-gray-700" /> Change Password
                </h3>
                <form className="space-y-3">
                    <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full text-xs sm:text-sm px-4 py-2 border rounded-lg focus:ring focus:ring-sky-200"
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-sky-200 text-xs sm:text-sm"
                    />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-sky-200 text-xs sm:text-sm"
                    />
                    <button
                        type="submit"
                        className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 text-xs sm:text-sm"
                    >
                        Update Password
                    </button>
                </form>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="font-semibold flex items-center gap-2 mb-3 text-xs sm:text-lg">
                    <Smartphone className="text-gray-700" /> Two-Factor Authentication
                </h3>
                <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                    Add an extra layer of security to your account by enabling 2FA.
                </p>
                <button className="bg-green-600 text-xs sm:text-sm text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Enable 2FA
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="text-xs sm:text-lg font-semibold flex items-center gap-2 mb-3">
                    <Globe className="text-gray-700" /> Recent Login Activity
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                    <li className="text-xs sm:text-sm">📍 Chrome on Windows — 2 hours ago</li>
                    <li className="text-xs sm:text-sm">📍 Safari on iPhone — 1 day ago</li>
                    <li className="text-xs sm:text-sm">📍 Edge on Mac — 3 days ago</li>
                </ul>
            </div>
        </div>
    );
};

export default Security;
