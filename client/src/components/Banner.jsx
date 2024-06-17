import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { banener } from '../assets/img';

const Banner = () => {
  return (
    <div className='relative w-full h-[440px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6)), url(${banener})` }}>
      <div className='flex lg:hidden justify-between px-4 pt-4'>
        <FaArrowLeft className="text-white" />
        <button className='w-[76px] h-[28px] text-[12px] text-white bg-transparent border border-white rounded-[5px]'>Join Group</button>
      </div>
      <div className='absolute bottom-[80px] left-[200px] text-white'>
        <h1 className='font-bold text-[36px]'>Computer Engineering</h1>
        <p className='font-normal text-[18px]'>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  )
}

export default Banner;
