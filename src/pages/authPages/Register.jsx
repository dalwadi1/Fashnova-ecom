import { Button } from '@/components/ui/button'
import { UserRoundPlus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Register = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200'>
            <div className='max-w-[80vw] h-[89vh] flex flex-col items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200 shadow-2xl p-5 rounded-md border-1'>
                <div className='flex items-center justify-center rounded-full bg-sky-900 shadow-lg p-3'>
                    <UserRoundPlus size={30} />
                </div>
                <h1 className='text-2xl font-bold py-2 text-center'>Create Your Account</h1>
                <p className='max-w-[80vw] text-center px-5 py-2'>Join us today and enjoy a seamless shopping experience.</p>
                <div className=' flex flex-col items-center justify-center gap-2 py-8'>
                    <input type="text" placeholder='email' className='bg-sky-50 px-5 py-3 rounded-sm' />
                    <input type="text" placeholder='password' className='bg-sky-50 px-5 py-3 rounded-sm' />

                    <Button className="bg-sky-800 hover:bg-sky-800 px-12 py-6 mt-5">REGISTER</Button>
                    <p>allready have an account?.<Link className='text-sky-950' to='/login'>Log in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register
