import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { products } from '@/lib/images'
import React from 'react'

const SubNavbar = () => {
    return (
        <div className='flex items-center justify-center mb-4'>
            <Tabs defaultValue="all" className="flex items-center">
                <TabsList className='flex gap-6 bg-transparent'>
                    <TabsTrigger value="all" className="bg-transparent hover:underline cursor-pointer">ALL</TabsTrigger>
                    <TabsTrigger value="mens" className="bg-transparent hover:underline cursor-pointer">MEN'S</TabsTrigger>
                    <TabsTrigger value="women" className="bg-transparent hover:underline cursor-pointer">WOMEN</TabsTrigger>
                    <TabsTrigger value="kids" className="bg-transparent hover:underline cursor-pointer">KIDS</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product1} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product2} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product3} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product4} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product5} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product6} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product7} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="mens">
                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product5} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product4} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product3} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product4} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product5} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product6} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product7} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="women">
                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product1} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product2} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product3} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product4} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product5} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product6} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product7} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="kids">
                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product7} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product6} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product5} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product4} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product3} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product2} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="bg-gray-200 flex items-center justify-center">
                                <img src={products?.product1} alt="" className='' />
                            </div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default SubNavbar
