import React, { useEffect, useState } from "react";
import { Mail, Phone, Camera } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { ManageProfile } from "@/redux/actions/auth.action";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { loading, user } = useSelector((state) => state.userDetails)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        bio: "",
    });

    const [profileImage, setProfileImage] = useState(null);
    const [profileFile, setProfileFile] = useState(null);
    // const [otpSent, setOtpSent] = useState(false);
    // const [otp, setOtp] = useState("");
    // const [otpVerified, setOtpVerified] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                bio: user.bio || "",
            });
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

        const values = new FormData();
        values.append("name", formData.name);
        values.append("bio", formData.bio);

        if (profileFile) {
            values.append("profile", profileFile);
        }

        setProfileFile(null)
        dispatch(ManageProfile(values))
    };

    // const handleSendOtp = () => {
    //     if (formData.phone.length === 10) {
    //         console.log("OTP sent to:", `+91${formData.phone}`);
    //         setOtpSent(true);
    //     }
    // };

    // const handleVerifyOtp = () => {
    //     if (otp === "123456") {
    //         setOtpVerified(true);
    //         alert("OTP Verified Successfully ✅");
    //     } else {
    //         alert("Invalid OTP ❌");
    //     }
    // };

    return (
        <div className="bg-gray-50 p-2 flex justify-center">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="bg-white rounded-2xl shadow px-6 py-2 flex flex-col items-center">
                    <div className="relative">
                        <img
                            src={user?.profile || "/assets/gif/user_logo.jpg"}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-sky-200"
                        />
                        <label className="absolute bottom-2 right-2 bg-sky-600 text-white p-2 rounded-full shadow hover:bg-sky-700 cursor-pointer">
                            <Camera size={16} />
                            {/* <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            /> */}
                        </label>
                    </div>
                    <h2 className="mt-4 text-xl font-bold">{user?.name}</h2>
                    {
                        user?.bio && <p className="text-gray-500 text-xs sm:text-sm">{user?.bio}</p>
                    }

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

                <div className="sm:col-span-2 col-span-1 bg-white rounded-2xl shadow px-6 py-2">
                    <h3 className="text-lg font-bold mb-4">Profile Information</h3>
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        <div>
                            <label className="text-xs sm:text-sm font-medium mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
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
                                disabled
                                className="w-full border text-xs sm:text-sm rounded-lg px-3 py-2 focus:ring focus:ring-sky-200 outline-none"
                            />
                        </div>

                        <div className="sm:col-span-2">
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

                        {/* <div className="sm:col-span-2">
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
                                <div className="flex w-full items-center justify-between sm:flex-row flex-col gap-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter 10 digit mobile number"
                                        className="w-full text-xs sm:text-sm border rounded-lg px-3 py-2"
                                    />
                                    <button
                                        type="button"
                                        disabled={formData.phone.length !== 10}
                                        onClick={handleSendOtp}
                                        className="w-full px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 text-xs sm:text-sm disabled:bg-gray-400"
                                    >
                                        Send OTP
                                    </button>
                                </div>
                            </div>

                            {otpSent && !otpVerified && (
                                <div className="mt-4 flex sm:flex-row flex-col sm:gap-5 gap-1 items-start justify-start">
                                    <div className="w-full">
                                        <label className="block text-xs sm:text-sm font-medium mb-1">
                                            OTP
                                        </label>
                                        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                                            <InputOTPGroup className='w-full'>
                                                {Array.from({ length: 6 }).map((_, i) => (
                                                    <InputOTPSlot key={i} index={i} className='w-full' />
                                                ))}
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </div>
                                    <Button
                                        type="button"
                                        className="px-4 sm:mt-6 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 text-xs sm:text-sm disabled:bg-gray-400"
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
                        </div> */}

                        <div className="sm:col-span-2">
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

                        <div className="sm:col-span-2 flex sm:justify-end justify-between gap-3 w-full">
                            <button
                                type="button"
                                className="px-4 py-2 rounded-lg border hover:bg-gray-100 text-xs sm:text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={!profileFile}
                                className={
                                    loading
                                        ? "bg-sky-600  cursor-not-allowed opacity-50 px-8 rounded-sm py-1 sm:text-sm text-xs flex items-center justify-center"
                                        : "bg-sky-800 cursor-pointer hover:bg-sky-800 text-white px-8 rounded-sm py-2 sm:text-sm text-xs flex items-center justify-center"
                                }
                            >
                                {loading ? <video
                                    src="/assets/gif/loader/loading.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-9 h-9 rounded-full"
                                /> : 'Save Changes'}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
