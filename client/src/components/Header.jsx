import React from 'react'
import { Logo, Search } from "../assets/img/index";
import { NavLink, useNavigate } from "react-router-dom";
import { app } from '../config/firebase.config';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { info } from '../assets/img';

const Header = () => {
    const navigate = useNavigate()


    return (
        <div>
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
                <div className="flex-shrink-0 mr-[200px]">
                    <img src={info} alt="Profile" className=" rounded-full" />
                </div>
            </header>
        </div>
    )
}

export default Header