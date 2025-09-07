import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Shirt, Footprints, Star } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-9 overflow-hidden mb-3">
            <Footprints className="absolute bottom-10 right-16 text-gray-400 w-12 h-12 rotate-12 opacity-50" />

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className=""
                >
                    <div className="relative">
                        <h1 className="text-xl md:text-5xl font-extrabold text-blue-900 leading-tight">
                            Trendy Boys <span className="text-yellow-500">Fashion</span>
                            <br /> For Every Champ 👦
                        </h1>
                        <p className="sm:text-sm text-xs text-gray-500 max-w-md">
                            Discover stylish outfits, cool casuals, and festive wear for boys.
                            Make your champ shine every day!
                        </p>
                        <Star className="absolute -top-5 left-1 text-yellow-400 w-10 h-10 animate-bounce" />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    <img
                        src="/assets/images/products/bg/bg6.jpg"
                        alt="Boys Fashion"
                        className="rounded-2xl shadow-xl w-65 md:w-[400px] object-cover"
                    />
                    {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 flex items-center space-x-3">
                        <Shirt className="text-blue-600 w-8 h-8" />
                        <span className="text-blue-900 font-semibold">Cool T-Shirts</span>
                    </div> */}
                </motion.div>
            </div>
        </section>
    );
}
