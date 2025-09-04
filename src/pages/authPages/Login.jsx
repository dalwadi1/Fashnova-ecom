import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Login = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200'>
            <div className='max-w-[80vw] flex flex-col items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200 shadow-2xl p-2 rounded-md border-1'>
                <div className='flex items-center justify-center rounded-full bg-sky-900 shadow-lg p-3 mt-3'>
                    <LogIn size={30} />
                </div>
                <h1 className='sm:text-2xl text-lg font-bold py-2'>Welcome Back!</h1>
                <p className='max-w-[70vw] text-center px-5 py-2 sm:text-sm text-xs'>Login to your account to continue shopping and track your orders.</p>
                <div className='w-full flex flex-col items-center justify-center gap-2 py-5'>
                    <div className=''>
                        <input type="text" placeholder='email' className='bg-sky-50 px-5 py-3 rounded-sm sm:text-sm text-xs' />
                    </div>
                    <div>
                        <input type="text" placeholder='password' className='w-full bg-sky-50 px-5 py-3 rounded-sm sm:text-sm text-xs' />
                    </div>

                    <Button className="bg-sky-800 hover:bg-sky-800 px-18 sm:py-6 mt-5 sm:text-sm text-xs">LOG IN</Button>
                    <p className='text-center sm:text-sm text-xs'>Don't have an account?.<Link className='text-sky-950' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
