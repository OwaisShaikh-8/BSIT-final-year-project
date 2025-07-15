import React from 'react'
import Navbar from './Navbar'
// import logo from '../../Landingpage/Components/logo.png'
const Afterlogincustomer = () => {
  return (
    <>
    <Navbar/>
        <div className=' flex flex-col justify-center items-center md:items-start  px-5  md:px-20 h-screen bg-[#F0F0F0] gap-5'>
          <h1 className='text-5xl md:text-6xl font-semibold'>Hello, <span className='text-orange-500'>muhammad</span> </h1>
          <p className='font-semibold text-lg'>Here how to get started</p>
          <ol className='list-decimal ml-5'>
            <li>Change Location – Set your city to discover restaurants near you.</li>
            <li>Search Restetaurants – Find popular spots around you.</li>
            <li>Explore Menus – Browse dishes and see what’s cooking.</li>
            <li>Order Your Meal – Place your order and enjoy a quick, tasty experience!</li>
          </ol>
        </div>
    </>
    
        

    
  )
}

export default Afterlogincustomer
