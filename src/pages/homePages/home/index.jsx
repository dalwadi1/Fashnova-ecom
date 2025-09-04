import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { MoveRight } from 'lucide-react'
import React from 'react'
import HeroSection from './HeroSection'
import SubNavbar from './SubNavbar'
import { useNavigate } from 'react-router'
import { banner } from '@/lib/images'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className=''>
            <div className="py-5">
                <div className="flex justify-center items-center relative">
                    <img
                        src={banner}
                        alt="Winter Collection"
                        className="max-w-full max-h-screen"
                    />
                </div>
                <Carousel className="absolute lg:top-[26vh] top-[12vh] left-[12vw] max-w-[500px] hidden md:flex items-center">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="flex items-center justify-between h-full px-8">
                                <div className="flex flex-col justify-center gap-4 max-w-lg">
                                    <p className="text-red-500 uppercase tracking-wide">
                                        Winter Collection
                                    </p>
                                    <h2 className="lg:text-5xl lg:font-extrabold leading-tight">
                                        New Collections 2025
                                    </h2>
                                    <Button
                                        onClick={() => navigate('/shop')}
                                        className="bg-gray-200 hover:bg-white h-[6vh] text-black px-6 cursor-pointer py-3 w-[8vw] rounded-sm shadow-md flex items-center gap-2">
                                        Shop Now <MoveRight />
                                    </Button>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex items-center justify-center h-[68vh] text-3xl font-bold">
                                Slide 2
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex items-center justify-center h-[68vh] text-3xl font-bold">
                                Slide 3
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <HeroSection />
            <SubNavbar />
        </div>
    )
}

export default Home
