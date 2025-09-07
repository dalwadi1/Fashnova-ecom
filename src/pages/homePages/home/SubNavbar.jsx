import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { ProductGrid } from './ProductGrid '

const SubNavbar = () => {
    return (
        <div className='flex items-center justify-center mb-4 w-full'>
            <Tabs defaultValue="all" className="flex items-center w-full">
                <TabsList className="flex gap-6 bg-transparent">
                    <TabsTrigger value="all" className='text-gray-600 cursor-pointer'>ALL</TabsTrigger>
                    <TabsTrigger value="Shirts" className='text-gray-600 cursor-pointer'>Shirts</TabsTrigger>
                    <TabsTrigger value="T-Shirts" className='text-gray-600 cursor-pointer'>T-Shirts</TabsTrigger>
                    <TabsTrigger value="Pents" className='text-gray-600 cursor-pointer'>Pents</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className='w-full'>
                    <ProductGrid category="all" />
                </TabsContent>
                <TabsContent value="Shirts" className='w-full'>
                    <ProductGrid category="Shirts" />
                </TabsContent>
                <TabsContent value="T-Shirts" className='w-full'>
                    <ProductGrid category="T-Shirts" />
                </TabsContent>
                <TabsContent value="Pents" className='w-full'>
                    <ProductGrid category="Pents" />
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default SubNavbar
