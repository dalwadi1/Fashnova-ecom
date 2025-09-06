import React from 'react'
import HeroSection from './HeroSection'
import SubNavbar from './SubNavbar'
import { useNavigate } from 'react-router'

const Home = () => {
    return (
        <div className=''>
            {/* <div className="flex items-center justify-between py-3 bg-sky-100 px-4 mb-3">
                    <img src={shirtLogo} alt="shirt" className="w-[12vw] h-[5vh] rounded-full" />
                <div className="flex flex-col items-center justify-center">
                    <h4 className="sm:text-sm text-xs">T-Shirt</h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={tShirtLogo} alt="" className="max-w-[15vw] max-h-[15vh] rounded-full" />
                    <h4 className="sm:text-sm text-xs">Shirt</h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={nightWear} alt="" className="max-w-[15vw] max-h-[15vh] rounded-full" />
                    <h4 className="sm:text-sm text-xs">Night-Wear</h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={jeans} alt="" className="max-w-[15vw] max-h-[15vh] rounded-full" />
                    <h4 className="sm:text-sm text-xs">Jeans</h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={cargo} alt="" className="max-w-[15vw] max-h-[15vh] rounded-full" />
                    <h4 className="sm:text-sm text-xs">Cargo</h4>
                </div>
            </div> */}
            <HeroSection />
            <SubNavbar />
        </div>
    )
}

export default Home
