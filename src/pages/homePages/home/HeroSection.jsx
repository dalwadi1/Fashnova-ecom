import React from 'react'

const HeroSection = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="row-span-2 bg-blue-100 h-[500px] flex items-center justify-center">
                Women Clothes
            </div>

            <div className="bg-pink-100 h-[240px] flex items-center justify-center">
                Kid's Wear
            </div>

            <div className="bg-green-100 row-span-2 h-[500px] flex items-center justify-center">
                Men's Jackets
            </div>

            <div className=" bg-yellow-100 h-[240px] flex items-center justify-center">
                Men's Wear
            </div>
        </div>

    )
}

export default HeroSection
