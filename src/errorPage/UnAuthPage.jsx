import { Button } from '@/components/ui/button'
// import Page from '@/components/ui/comman/Page'
import Footer from '@/layout/mainLayout/footer'
import Header from '@/layout/mainLayout/header/Header'
import { Smile, UndoDot } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router'

const UnAuthPage = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full bg-gradient-to-br from-white via-sky-100 to-sky-200'>
            <div className='max-w-[88vw] mx-auto'>
                <Header />

                <div className='flex items-center flex-col py-7 justify-center'>
                    <div className='flex-1'>
                        <div className='flex items-center justify-center bg-sky-200 rounded-full shadow-sm'>
                            <Smile size={40} className='text-red-400' />
                        </div>
                    </div>
                    <div className='flex items-center gap-2 flex-col py-8'>
                        <h4 className='sm:text-2xl text-lg font-semibold sm:font-bold'>Please log in to continue</h4>
                        <p className='text-center sm:text-sm text-xs'>You must be logged in to access this page. Please log in to your account.</p>
                        <p className='text-center sm:text-lg text-sm'>Logn in <Link to='/login' className='underline text-sky-950 font-bold'>Here</Link>?</p>
                    </div>
                    <div className=''>
                        <Button
                            onClick={() => navigate('/')}
                            className='bg-sky-800 hover:bg-sky-800 sm:text-lg text-sm sm:px-8 sm:py-6 text-white cursor-pointer                        
                        '><UndoDot />Back To Home</Button>
                    </div>
                </div>

                <Page />

                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default UnAuthPage
