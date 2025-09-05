import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import HeroSection from './HeroSection'
import SubNavbar from './SubNavbar'
import { useNavigate } from 'react-router'
import { banner1, banner2, banner3, cargo, jeans, nightWear, shirtLogo, tShirtLogo } from "@/lib/images"
import MiniNav from "./MiniNav"

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className=''>
            <div className="py-5 w-full">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                    className=""
                >
                    <CarouselContent>
                        <CarouselItem className="flex justify-center items-center sm:h-[50vh] h-[25vh]">
                            <img src={banner1} alt="" className="w-full object-cover h-full" />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center items-center  sm:h-[50vh] h-[25vh]">
                            <img src={banner2} alt="" className="w-full object-cover h-full" />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center items-cente sm:h-[50vh] h-[25vh]">
                            <img src={banner3} alt="" className="w-full object-cover h-full" />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
            {/* <div className="flex items-center justify-between py-3 bg-sky-100 px-4 mb-3">
                <div className="flex flex-col items-center justify-center">
                    <img src={shirtLogo} alt="shirt" className="w-[12vw] h-[5vh] rounded-full" />
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
