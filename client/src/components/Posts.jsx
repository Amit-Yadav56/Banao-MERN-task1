import React, { useState } from 'react';
import { Company, Dots, Location, Pencil, Share, Time, Views, article1, article2, article3, i, user1, user2, user3 } from '../assets/img';

const Posts = () => {
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false, false]);

  const toggleDropdown = (index) => {
    const newDropdownVisible = dropdownVisible.map((visible, i) => i === index ? !visible : false);
    setDropdownVisible(newDropdownVisible);
  };

  return (
    <div className='flex flex-col sm:flex-row w-full mb-3'>
      <div className='w-full sm:w-[76%] flex flex-col gap-2'>
        {[article1, article2, article3].map((article, index) => (
          <div key={index} className='relative w-full sm:w-[692px] h-auto sm:h-[472px] border-[2px] border-solid border-[#E0E0E0] rounded flex flex-col'>
            <img src={article} alt="" className='w-full h-auto sm:h-[220px] object-cover' />
            <div className='m-4'>
              <p className='w-[100px] h-[25px] font-sans font-[500] text-[18px] mb-[0.7rem]'>✍️ Article</p>
              <div className='flex flex-col sm:flex-row justify-between relative'>
                <p className='w-full sm:w-[600px] h-auto sm:h-[60px] font-sans font-bold leading-[29.52px] text-[22px]'>What if famous brands had regular fonts? Meet RegulaBrands!</p>
                <div className='relative mt-2 sm:mt-0'>
                  <img
                    src={Dots}
                    className={`cursor-pointer size-[28px] ${dropdownVisible[index] ? "bg-[#BFBFC0] rounded-[5px]" : ""}`}
                    onClick={() => toggleDropdown(index)}
                    alt=""
                  />
                  {dropdownVisible[index] && (
                    <div className='absolute right-0 mt-2 w-[160px] h-[102px] bg-white border border-gray-300 rounded shadow-lg z-10'>
                      <p className='px-4 py-[4px] hover:bg-gray-100 cursor-pointer'>Edit</p>
                      <p className='px-4 py-[4px] hover:bg-gray-100 cursor-pointer'>Report</p>
                      <p className='px-4 py-[4px] hover:bg-gray-100 cursor-pointer'>Option 3</p>
                    </div>
                  )}
                </div>
              </div>
              <p className='w-full font-sans text-[19px] mt-[0.7rem] mb-[0.9rem] text-[#5C5C5C]'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
              <div className='flex flex-col sm:flex-row items-center justify-between mt-[30px]'>
                <div className='flex items-center gap-2'>
                  <img src={user1} className='size-[48px] rounded-3xl' alt="" />
                  <p className='font-sans text-[18px] font-bold'>Sarthak Kamra</p>
                </div>
                <div className='flex flex-row items-center gap-[42px] mt-2 sm:mt-0'>
                  <div className='flex flex-row gap-2'>
                    <img src={Views} alt="" />
                    <p>1.4k views</p>
                  </div>
                  <button className='w-[42px] h-[36px] flex items-center justify-center bg-[#EDEEF0]'>
                    <img className='w-[13.5px] h-[14.9px]' src={Share} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full sm:w-[24%]'>
        <div className='flex w-full mt-[30px] flex-col gap-[20px]'>
          <div className='flex gap-[5px] text-[14px] font-[500] items-center justify-between w-full border-b-2 pb-[10px]'>
            <div className='flex flex-row gap-[5px] items-center'>
              <img src={Location} className='w-[11.67px] h-[16.67px]' alt="" />
              <p>Noida, India</p>
            </div>
            <img src={Pencil} alt="" />
          </div>
          <div className='flex flex-row justify-center gap-[7px]'>
            <img src={i} className='size-[16px]' alt="" />
            <p className='w-full text-[12px] font-sans leading-[15.6px] opacity-[50%]'>Your location will help us serve better and extend a personalised experience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts;
