import React from 'react'
import HeroSection from './HeroSection'
import SubNavbar from './SubNavbar'
import { useNavigate } from 'react-router'

const Home = () => {
    return (
        <div className=''>
            <HeroSection />
            <SubNavbar />
        </div>
    )
}

export default Home
