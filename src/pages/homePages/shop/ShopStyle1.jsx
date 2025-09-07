import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useLocation } from "react-router";
import { productsDB } from "@/database/productsDB";

const ShopStyle1 = () => {
    const { state } = useLocation();
    const category = state?.toLowerCase();
    const products = productsDB[category] || [];

    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 w-full">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="relative flex flex-col px-2 py-1 border-b sm:border-0 group"
                >
                    <div className="rounded-sm flex items-center justify-center relative bg-sky-50 w-full !max-h-[290px]">
                        <img
                            src={product.image}
                            alt={product.category}
                            className="w-full h-full object-cover rounded-lg p-1"
                        />

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between">
                            <div className="bg-sky-50 rounded-sm flex items-center justify-between gap-3 px-2 w-full h-[8vh]">
                                <button className="p-2 bg-white rounded-full shadow hover:scale-110 transition">
                                    <Heart size={20} />
                                </button>
                                <button className="p-2 bg-white rounded-full shadow hover:scale-110 transition">
                                    <ShoppingCart size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 sm:max-w-[10vw] flex-wrap py-2">
                        {product.colors.map((color, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center rounded-full p-1 border border-black cursor-pointer bg-sky-50"
                            >
                                <div
                                    className="p-1 rounded-full"
                                    style={{ backgroundColor: color }}
                                ></div>
                            </div>
                        ))}
                    </div>

                    <p className="sm:text-sm text-xs">{product.name}</p>
                    <p className="sm:text-sm text-xs">{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ShopStyle1;
