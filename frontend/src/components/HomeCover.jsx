import React from 'react'
import { assets } from '../assets/assets'

const HomeCover = () => {
  return (
    <div className='relative h-[480px] w-full font-serif'>
      <img className='h-full w-full object-cover rounded'
      src={assets.cover} alt='Cover'/>
    {/* Left-side-content */}
    <div className='absolute top-1/2 left-20 transform -translate-y-1/2 text-white'>
      <h1 className='text-3xl md:text-4xl font-bold mb-4'>Welcome to HealthSync</h1>
        <p className='text-lg mb-6'>
            Book appointments with trusted doctors easily and efficiently.
        </p>
        <a href='#speciality' className='inline-block rounded-full bg-button px-5 pb-3.5 pt-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-200 ease-in-out hover:bg-button-hover focus:bg-button-focus active:bg-button-active focus:outline-none focus:ring-0'>Book appointment</a>
    </div> 
    </div>
  )
}

export default HomeCover
