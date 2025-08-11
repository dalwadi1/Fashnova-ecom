import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Login = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200'>
            <div className='w-[30vw] h-[89vh] flex flex-col items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200 shadow-2xl p-5 rounded-md border-1'>
                <div className='w-[5vw] h-[11vh] flex items-center justify-center rounded-full bg-sky-900 shadow-lg'>
                    <LogIn />
                </div>
                <h1 className='text-2xl font-bold py-2 '>Welcome Back!</h1>
                <p className='max-w-[35vw] text-center px-5 py-2'>Login to your account to continue shopping and track your orders.</p>
                <div className=' flex flex-col items-center justify-center gap-8 py-8'>
                    <input type="text" placeholder='email' />
                    <input type="text" placeholder='password' />

                    <Button className="bg-sky-800 hover:bg-sky-800 w-[25vw] h-[8vh]">LOG IN</Button>
                    <p>Don't have an account?.<Link className='text-sky-950' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
