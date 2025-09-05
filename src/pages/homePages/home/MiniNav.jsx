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
        "Jeans",
        "Trousers",
        "Joggers",
        "Casual",
        "Formal",
        "Printed",
        "Polo",
        "Graphic Tees"
    ]

    const handleClick = (category) => {
        setActive(category)
        navigate('/shop', { state: category })
    }

    return (
        <div className='py-2 w-full border-2 px-7 mt-2 bg-sky-100'>
            <ul className='flex items-center justify-between gap-2'>
                {categories.map((cat, index) => (
                    <StarBorder
                        key={index}
                        as="button"
                        className="shadow-lg"
                        color="black"
                        speed="5s"
                        onClick={() => handleClick(cat)}
                    >
                        <li
                            className={`rounded-lg px-5 flex items-center justify-center py-2 cursor-pointer text-xs 
              ${active === cat ? 'bg-black text-white' : 'bg-sky-50 text-black'}`}
                        >
                            {cat}
                        </li>
                    </StarBorder>
                ))}
            </ul>
        </div>
    )
}

export default MiniNav
