import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const SubNavbar = () => {
    return (
        <div className='flex items-center justify-center mb-4'>
            <Tabs defaultValue="account" className="w-[400px] flex items-center">
                <TabsList className='flex gap-6 bg-transparent'>
                    <TabsTrigger value="all" className="bg-transparent hover:underline cursor-pointer">ALL</TabsTrigger>
                    <TabsTrigger value="mens" className="bg-transparent hover:underline cursor-pointer">MEN'S</TabsTrigger>
                    <TabsTrigger value="women" className="bg-transparent hover:underline cursor-pointer">WOMEN</TabsTrigger>
                    <TabsTrigger value="kids" className="bg-transparent hover:underline cursor-pointer">KIDS</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex flex-col">
                            <div className="h-[45vh] bg-gray-200 flex items-center justify-center">Rutvik</div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="h-[45vh] bg-gray-200 flex items-center justify-center">Rutvik</div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="h-[45vh] bg-gray-200 flex items-center justify-center">Rutvik</div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="h-[45vh] bg-gray-200 flex items-center justify-center">Rutvik</div>
                            <p>women</p>
                            <p>$123</p>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="mens">
                    <div className='h-[25vh]'>
                        Change your password here.
                    </div>
                </TabsContent>
                <TabsContent value="women">
                    <div className='h-[25vh]'>
                        Make changes to your account here.
                    </div>
                </TabsContent>
                <TabsContent value="kids">
                    <div className='h-[25vh]'>
                        Change your password here.
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default SubNavbar
