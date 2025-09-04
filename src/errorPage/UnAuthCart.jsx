import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const UnAuthCart = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
            <ShoppingCart className="h-16 w-16 text-gray-400" />
            <p className="text-lg font-medium">Missing Cart items?</p>
            <p className="text-sm text-gray-500">
                Login to see the items you added previously
            </p>
            <div className="flex flex-col gap-3 mt-4">
                <Link to={'/login'} className="px-2 py-3 rounded-sm text-white bg-blue-700">Login</Link>
                <Link to={'/'} className="px-6 text-blue-700">Continue Shopping</Link>
            </div>
        </div>
    )
}

export default UnAuthCart
