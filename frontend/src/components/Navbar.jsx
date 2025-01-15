import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className='flex items-center justify-between text-base py-5 mb-6 border-b border-b-gray-200 h-[80px]'>
            <img className='w-48 h-auto object-contain cursor-pointer' src={assets.healthsync} alt="HealthSync Logo"/>
            <ul className='hidden md:flex items-start gap-10 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1'>Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='contact'>
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token 
                    ? <div className='flex items-center cursor-pointer gap-2 group relative'>
                        <img className='rounded-full w-9' src={assets.profilepic} alt=""/>
                        <img className='w-2.5'src={assets.dropdown_icon}/>
                        <div className='absolute top-0 right-0 pt-14 font-medium text-base text-gray-600 z-20 hidden group-hover:block'>
                            <div className='flex flex-col min-w-48 bg-slate-100 rounded gap-5 p-5 shadow-lg'>
                                <p onClick={() => navigate('/profile-page')} className='hover:text-primary cursor-pointer'>My Profile</p>
                                <p onClick={() => navigate('/appointments-page')} className='hover:text-primary cursor-pointer'>My Appointments</p>
                                <p onClick={()=>setToken(false)} className='hover:text-primary cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                    :
                    <button onClick={() => navigate('/login')} className='inline-block rounded-full bg-button px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-200 ease-in-out hover:bg-button-hover focus:bg-button-focus active:bg-button-active focus:outline-none focus:ring-0'>Create account</button>
                }
                
            </div>
        </div>
    )
}

export default Navbar