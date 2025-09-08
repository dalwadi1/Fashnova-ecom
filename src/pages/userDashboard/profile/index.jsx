import React, { useEffect, useState } from "react";
import { Mail, Phone, Camera } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "@/redux/actions/auth.action";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { loading, user } = useSelector((state) => state.profile);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        bio: "",
    });

    const [profileImage, setProfileImage] = useState(null);
    const [profileFile, setProfileFile] = useState(null);
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            setFormData({
                fullName: user.name || "",
                email: user.email || "",
                phone: user.phone ? user.phone.replace("+91", "") : "",
                bio: user.bio || "",
            });
            setProfileImage(user.profile || "/assets/images/products/bg/bg4.jpg");
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const onlyNumbers = value.replace(/\D/g, "");
            if (onlyNumbers.length <= 10) {
                setFormData({ ...formData, [name]: onlyNumbers });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileFile(file);
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalData = new FormData();
        finalData.append("fullName", formData.fullName);
        finalData.append("email", formData.email);
        finalData.append("phone", `+91${formData.phone}`);
        finalData.append("bio", formData.bio);

        if (profileFile) {
            finalData.append("profile", profileFile);
        }

        for (let [key, val] of finalData.entries()) {
            console.log(key, val);
        }
    };

    const handleSendOtp = () => {
        if (formData.phone.length === 10) {
            console.log("OTP sent to:", `+91${formData.phone}`);
            setOtpSent(true);
        }
    };

    const handleVerifyOtp = () => {
        if (otp === "123456") {
            setOtpVerified(true);
            alert("OTP Verified Successfully ✅");
        } else {
            alert("Invalid OTP ❌");
        }
    };

    return (
        <div className="bg-gray-50 p-2 flex justify-center">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                    <div className="relative">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-sky-200"
                        />
                        <label className="absolute bottom-2 right-2 bg-sky-600 text-white p-2 rounded-full shadow hover:bg-sky-700 cursor-pointer">
                            <Camera size={16} />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                    <h2 className="mt-4 text-xl font-bold">{user?.name  }</h2>
                    <p className="text-gray-500 text-xs sm:text-sm">Front-End Developer</p>

                    <div className="mt-6 w-full">
                        <div className="flex items-center gap-2 text-gray-600 mb-3 text-xs sm:text-sm">
                            <Mail size={16} /> <span>{user?.email}</span>
                        </div>
                        {user?.phone && (
                            <div className="flex items-center gap-2 text-gray-600 mb-3 text-xs sm:text-sm">
                                <Phone size={16} /> <span>{`+91 ${user?.phone}`}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">
                    <h3 className="text-lg font-bold mb-4">Profile Information</h3>
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        <div>
                            <label className="block text-xs sm:text-sm font-medium mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full text-xs sm:text-sm border rounded-lg px-3 py-2 focus:ring focus:ring-sky-200 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border text-xs sm:text-sm rounded-lg px-3 py-2 focus:ring focus:ring-sky-200 outline-none"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-xs sm:text-sm font-medium mb-1">
                                Profile
                            </label>
                            <input
                                type="file"
                                name="profile"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full border text-xs sm:text-sm rounded-lg px-3 py-2 focus:ring focus:ring-sky-200 outline-none"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-xs sm:text-sm font-medium mb-1">
                                Phone
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value="+91"
                                    readOnly
                                    className="w-16 text-xs sm:text-sm border rounded-lg px-3 py-2 bg-gray-100 text-gray-500"
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter 10 digit mobile number"
                                    className="w-full text-xs sm:text-sm border rounded-lg px-3 py-2"
                                />
                                <Button
                                    type="button"
                                    disabled={formData.phone.length !== 10}
                                    onClick={handleSendOtp}
                                >
                                    Send OTP
                                </Button>
                            </div>
                            {/* OTP Fields */}
                            {otpSent && !otpVerified && (
                                <div className="mt-4">
                                    <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                                        <InputOTPGroup>
                                            {Array.from({ length: 6 }).map((_, i) => (
                                                <InputOTPSlot key={i} index={i} />
                                            ))}
                                        </InputOTPGroup>
                                    </InputOTP>
                                    <Button
                                        type="button"
                                        className="mt-2"
                                        onClick={handleVerifyOtp}
                                        disabled={otp.length !== 6}
                                    >
                                        Verify OTP
                                    </Button>
                                </div>
                            )}
                            {otpVerified && (
                                <p className="text-green-600 text-xs mt-2">OTP Verified ✅</p>
                            )}
                        </div>

                        <div className="md:col-span-2">
                            <label className="block font-medium mb-1 text-xs sm:text-sm">
                                Bio
                            </label>
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                className="w-full text-xs sm:text-sm border rounded-lg px-3 py-2 focus:ring focus:ring-sky-200 outline-none h-24"
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
                                disabled={formData.phone.length !== 10}
                                className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 text-xs sm:text-sm disabled:bg-gray-400"
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
