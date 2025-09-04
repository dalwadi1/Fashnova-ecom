import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { ProductGrid } from './ProductGrid '

const SubNavbar = () => {
    return (
        <div className='flex items-center justify-center mb-4 w-full'>
            <Tabs defaultValue="all" className="flex items-center w-full">
                <TabsList className="flex gap-6 bg-transparent">
                    <TabsTrigger value="all">ALL</TabsTrigger>
                    <TabsTrigger value="mens">MEN'S</TabsTrigger>
                    <TabsTrigger value="women">WOMEN</TabsTrigger>
                    <TabsTrigger value="kids">KIDS</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className='w-full'>
                    <ProductGrid category="all" />
                </TabsContent>
                <TabsContent value="mens" className='w-full'>
                    <ProductGrid category="mens" />
                </TabsContent>
                <TabsContent value="women" className='w-full'>
                    <ProductGrid category="women" />
                </TabsContent>
                <TabsContent value="kids" className='w-full'>
                    <ProductGrid category="kids" />
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default SubNavbar
