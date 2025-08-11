import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { MoveRight } from 'lucide-react'
import React from 'react'
import HeroSection from './HeroSection'
import SubNavbar from './SubNavbar'

const Home = () => {
    return (
        <div>
            <div className="min-h-[70vh] py-5">
                <Carousel className="h-full">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="flex items-center justify-between h-[68vh] px-8">
                                <div className="flex flex-col justify-center gap-4 max-w-lg">
                                    <p className="text-red-500 uppercase tracking-wide">
                                        Winter Collection
                                    </p>
                                    <h2 className="text-5xl font-extrabold leading-tight">
                                        New Collection 2025
                                    </h2>
                                    <Button className="bg-gray-200 hover:bg-white h-[6vh] text-black px-6 py-3 w-[8vw] rounded-sm shadow-md flex items-center gap-2">
                                        Shop Now <MoveRight />
                                    </Button>
                                </div>
                                <div className="flex justify-center items-center w-1/2">
                                    <img
                                        src="your-image-url-here"
                                        alt="Winter Collection"
                                        className="h-[60vh] object-cover rounded-lg shadow-lg"
                                    />
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
