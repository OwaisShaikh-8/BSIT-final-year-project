import React, { useState,useEffect } from 'react';
import img from '../Components/Banner.jpg';
import img2 from '../Components/Banner2.jpg';
import img3 from '../Components/Banner3.jpg';
// import img4 from '../Components/management.jpg';
import Cardlist from './Cardlist';
function Banner() {
    const [load, setload] = useState(false)
    useEffect(() => {
        setload(true);
    }, [])
    
    return (
        <>
            <div
                className="h-screen w-full bg-cover bg-center px-2 py-20 md:px-20 text-center md:text-start"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className={`w-full md:w-[40%] mt-40 space-y-5 transform transition-all duration-1000 ease-out 
        ${load ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className='md:text-6xl text-5xl font-bold text-[#FFA31A]'>Where Food
                        Meets <span className='text-[#3A3A3A]'>Efficiency</span></h1>
                    <p className='text-white'>lets you order meals and enjoy a smooth dine-in or takeaway experience — powered by a smart kitchen system built for speed and efficiency.</p>

                    <div className='w-full pt-20 flex flex-col md:flex-row  items-center gap-3'>
                        <button className='h-9 w-40 rounded-3xl font-medium text-sm text-white bg-[#3A3A3A] hover:bg-[#FFA31A] transition-all duration-300'>Order Your Meals</button>
                        <button className='h-9 w-40 rounded-3xl font-medium  text-sm bg-white hover:bg-slate-200 transition-all duration-300'>Join As a Restaurant</button>

                    </div>
                </div>
            </div>

            <div className="h-screen w-full bg-cover bg-center px-2 py-10 md:px-20 "
                style={{ backgroundImage: `url(${img2})` }}>
                <h1 className='text-4xl text-center font-bold'>Discover What We’ve Provided to Customers Enhance
                    Every <span className='text-[#FFA31A]'>Bite of Your Journey</span> </h1>

                    <Cardlist/>
            </div>
            <div className="h-screen w-full bg-cover bg-center px-2 py-5 md:px-20 flex flex-col md:flex-row items-center justify-center md:justify-end "
                style={{ backgroundImage: `url(${img3})` }}>
                    <div className=' z-10 w-full md:w-[60%] text-center md:text-start '>
                        <h1 className='text-5xl font-bold text-[#FFA31A]'>Smarter Restaurant Management Starts Here</h1>
                        <p className='text-white'>Empowers restaurants with intelligent tools to manage orders, kitchen workflow, and staff — all from a single dashboard. Boost productivity and keep customers satisfied.</p>
                    </div>
            </div>
        </>
    );
}

export default Banner;
