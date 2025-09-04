import { Button } from '@/components/ui/button'
import { UserRoundPlus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Register = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200'>
            <div className='max-w-[80vw] flex flex-col items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200 shadow-2xl p-5 rounded-md border-1'>
                <div className='flex items-center justify-center rounded-full bg-sky-900 shadow-lg p-3 mt-3'>
                    <UserRoundPlus size={30} />
                </div>
                <h1 className='sm:text-2xl text-lg font-bold py-2 text-center'>Create Your Account</h1>
                <p className='max-w-[80vw] text-center px-5 py-2 sm:text-sm text-xs'>Join us today and enjoy a seamless shopping experience.</p>
                <div className=' flex flex-col items-center justify-center gap-2 py-5'>
                    <input type="text" placeholder='email' className='bg-sky-50 px-5 py-3 rounded-sm sm:text-sm text-xs' />
                    <input type="text" placeholder='password' className='bg-sky-50 px-5 py-3 rounded-sm sm:text-sm text-xs' />
                    <input type="text" placeholder='email' className='bg-sky-50 px-5 py-3 rounded-sm sm:text-sm text-xs' />
                    <input type="text" placeholder='password' className='bg-sky-50 px-5 py-3 rounded-sm sm:text-sm text-xs' />

                    <Button className="bg-sky-800 hover:bg-sky-800 px-12 sm:py-6 mt-5 sm:text-sm text-xs">REGISTER</Button>
                    <p className='sm:text-sm text-xs'>allready have an account?.<Link className='text-sky-950' to='/login'>Log in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register
