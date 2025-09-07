import { Heart, ShoppingCart, Star } from 'lucide-react';
import React, { useState } from 'react'
import { useLocation } from 'react-router';

const ProductDetails = () => {
    const { state } = useLocation()
    const [quantity, setQuantity] = useState(1)

    console.log(state);

    const product = {
        name: "Nike Air Max Sneakers",
        image: "https://via.placeholder.com/500",
        gallery: [
            "https://via.placeholder.com/200",
            "https://via.placeholder.com/201",
            "https://via.placeholder.com/202",
            "https://via.placeholder.com/202",
            "https://via.placeholder.com/202",
            "https://via.placeholder.com/202",
            "https://via.placeholder.com/202",
            "https://via.placeholder.com/202",
        ],
        price: 4999,
        oldPrice: 6999,
        rating: 4,
        reviews: 120,
        description:
            "High-quality sneakers with modern design and extra comfort. Perfect for running, casual wear, and gym workouts.",
    };
    return (
        <div className="bg-white rounded-sm grid md:grid-cols-2 px-2 sm:py-12 py-6 mb-2 mt-2">
            <div className="flex flex-col items-center gap-8">
                <div className="rounded-2xl flex items-center justify-center">
                    <img
                        src={state.image}
                        alt={state.name}
                        className="h-95 object-contain rounded-xl"
                    />
                </div>

                <div className="flex sm:w-[30vw] w-[65vw] gap-2 overflow-x-auto">
                    {product.gallery?.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`thumb-${i}`}
                            className="w-20 h-20 object-cover rounded-lg border cursor-pointer hover:border-sky-500"
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <h1 className="text-2xl sm:text-3xl font-bold">{state.name}</h1>

                <div className="flex items-center gap-2 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill={i < product.rating ? "currentColor" : "none"} />
                    ))}
                    <span className="sm:text-sm text-xs text-gray-600">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-baseline gap-3">
                    <span className="sm:text-2xl text-xl font-bold text-sky-600">{state.price}</span>
                    {product.oldPrice && (
                        <span className="text-gray-500 sm:text-2xl text-xl line-through">{product.oldPrice}</span>
                    )}
                </div>

                <p className="text-gray-600 leading-relaxed sm:text-sm text-xs">{product.description}</p>

                <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-medium sm:text-sm text-xs">Quantity:</span>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                        <button
                            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                        >
                            -
                        </button>
                        <span className="px-4 sm:text-sm text-xs">{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button className="flex sm:text-sm text-xs items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-xl hover:bg-sky-700 shadow">
                        <ShoppingCart size={18} /> Add to Cart
                    </button>
                    <button className="flex sm:text-sm text-xs items-center gap-2 px-4 py-2 border rounded-xl hover:bg-gray-100">
                        <Heart size={18} /> Wishlist
                    </button>
                </div>

                <div className="border-t pt-4 text-sm text-gray-600 space-y-2">
                    <p className='sm:text-sm text-xs'>✅ Free Delivery available</p>
                    <p className='sm:text-sm text-xs'>✅ 7-day return policy</p>
                    <p className='sm:text-sm text-xs'>✅ Cash on Delivery option</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
