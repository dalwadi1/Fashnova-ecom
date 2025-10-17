import StarBorder from '@/animation/StarBorder'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

const MiniNav = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [active, setActive] = useState(null)

    useEffect(() => {
        if (location?.pathname === "/") {
            setActive(null)
        }
    }, [location])

    const categories = [
        { category: "Pent", subCategory: "Jeans" },
        { category: "Shirts", subCategory: "" },
        { category: "T-shirts", subCategory: "" },
        { category: "Nightwears", subCategory: "" },
        { category: "Cargos", subCategory: "Cargos" },
        { category: "Baggy", subCategory: "Baggy" },
        { category: "Formal Pents", subCategory: "Formal Pents" },
        { category: "Trousers", subCategory: "" },
    ]

    const handleClick = (category) => {
        setActive(category)
        navigate('/shop', { state: category })
    }

    return (
        <div className='py-1 w-full border-2 px-7 mt-2 bg-sky-100'>
            <ul className='flex items-center justify-between gap-2'>
                {categories.map((cat, index) => (
                    <StarBorder
                        key={index}
                        as="button"
                        className="shadow-lg"
                        color="black"
                        speed="5s"
                        onClick={() => handleClick(cat?.category)}
                    >
                        <li
                            className={`rounded-lg px-3 flex items-center justify-center py-2 cursor-pointer text-xs 
              ${active === cat?.category ? 'bg-black text-white' : 'bg-sky-50 text-gray-500'}`}
                        >
                            {cat?.category}
                        </li>
                    </StarBorder>
                ))}
            </ul>
        </div>
    )
}

export default MiniNav
