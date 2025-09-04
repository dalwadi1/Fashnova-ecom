import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import HeroSection from './HeroSection'
import SubNavbar from './SubNavbar'
import { useNavigate } from 'react-router'
import { banner1, banner2, banner3 } from "@/lib/images"
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
                        <CarouselItem className="flex justify-center items-center bg-blue-200 sm:h-[50vh] h-[25vh]">
                            <img src={banner1} alt="" className="w-full object-cover h-full" />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center items-center bg-green-200 sm:h-[50vh] h-[25vh]">
                            <img src={banner2} alt="" className="w-full object-cover h-full" />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center items-center bg-red-200 sm:h-[50vh] h-[25vh]">
                            <img src={banner3} alt="" className="w-full object-cover h-full" />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
            <HeroSection />
            <SubNavbar />
        </div>
    )
}

export default Home
