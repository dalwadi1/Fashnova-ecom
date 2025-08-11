import { Button } from '@/components/ui/button'
import { UserRoundPlus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Register = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200'>
            <div className='w-[30vw] h-[89vh] flex flex-col items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200 shadow-2xl p-5 rounded-md border-1'>
                <div className='w-[5vw] h-[11vh] flex items-center justify-center rounded-full bg-sky-900 shadow-lg'>
                    <UserRoundPlus />
                </div>
                <h1 className='text-2xl font-bold py-2 '>Create Your Account</h1>
                <p className='max-w-[35vw] text-center px-5 py-2'>Join us today and enjoy a seamless shopping experience.</p>
                <div className=' flex flex-col items-center justify-center gap-8 py-8'>
                    <input type="text" placeholder='email' />
                    <input type="text" placeholder='password' />

                    <Button className="bg-sky-800 hover:bg-sky-800 w-[25vw] h-[8vh]">REGISTER</Button>
                    <p>allready have an account?.<Link className='text-sky-950' to='/login'>Log in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register
