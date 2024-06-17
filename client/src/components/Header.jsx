import React from 'react'
import { Logo, Search, down, vec } from "../assets/img/index";
import { NavLink, useNavigate } from "react-router-dom";
import { app } from '../config/firebase.config';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { info } from '../assets/img';
import SignUp from './SiginUp';
import SignIn from './SignIn';

const Header = () => {
    const navigate = useNavigate()


    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    return (
        <div>
            <SignUp setOpen={setOpen} open={open} setOpen2={setOpen2}></SignUp>
            <SignIn open2={open2} setOpen2={setOpen2} setOpen={setOpen}></SignIn>
            <header className="flex items-center justify-between h-[72px] bg-[#FFFFFF] shadow-[0px_1px_2px_0px_#0000001F]">
                <NavLink to="/">
                    <img src={Logo} alt="Logo" className="w-[162.57px] h-[24px] ml-[72px]" />
                </NavLink>
                <div className=" mx-4">
                    <div className="relative left-[15%] ml">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <img src={Search} alt="Search Icon" className="h-5 w-5 text-gray-400" />
                        </span>
                        <input
                            type="text"
                            className="w-[360px] pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Search for your favorite groups in ATG"
                        />
                    </div>
                </div>
                <button className="flex-shrink-0 flex items-center justify-center mr-[200px]" onClick={() => setOpen(true)}>
                    <p className='text-[16px] font-[600]'>Create account. <span className='font-bold text-[#2F6CE5]'>It’s free!</span></p>
                    <div className='size-[24px] flex justify-center items-center'>
                        <img className='w-[10px] h-[5px] text-[#2E2E2E]' src={vec} alt="" />
                    </div>
                </button>
            </header>
        </div>
    )
}

export default Header