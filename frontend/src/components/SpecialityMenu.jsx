import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div className='flex flex-col items-center gap-4 py-16 font-serif text-gray-600' id='speciality'>
            <h1 className='font-medium text-4xl'>Find a Doctor by Specialty</h1>
            <p className='sm:w-1/3 text-center text-sm'>Browse through a wide range of reliable doctors and secure your appointment in no time</p>
            <div className='flex sm:justify-center gap-8 pt-5 w-full overflow-scroll'>
                {specialityData.map((item, index) => (
                    <Link onClick={() => scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                        <img className='w-16 sm:w-24 mb-2 rounded-full shadow-md hover:shadow-xl transition-shadow duration-300' src={item.image} alt=''/>
                        <p>{item.speciality}</p>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default SpecialityMenu