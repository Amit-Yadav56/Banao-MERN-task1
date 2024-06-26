import React, { useState } from 'react';
import { down, join } from '../assets/img';
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import Posts from './Posts';

const MainContent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const baseStyle = {
    lineHeight: '20.8px',
    textAlign: 'left',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const activeStyle = {
    ...baseStyle,
    color: '#000000',
    fontFamily: "sans-serif",
    fontWeight: "500",
    borderBottom: '2px solid',
    lineHeight: '33px',
  };

  const links = [
    'All Posts(32)',
    'Article',
    'Event',
    'Education',
    'Job',
  ];

  return (
    <div className='max-w-[1040px] mx-auto mt-7 p-4'>
      <div className='w-full my-7 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-[2px] border-b-[#E0E0E0] pb-3'>
        <div className='flex gap-6'>
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              style={activeIndex === index ? activeStyle : baseStyle}
            >
              {link}
            </button>
          ))}
        </div>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 mt-3 sm:mt-0 font-sans'>
          <button className='w-full sm:w-[133px] h-[36px] rounded-md bg-[#EDEEF0] font-sans font-[700] flex justify-center items-center gap-[2px] pl-2'>Write a post <img src={down} alt="" /></button>
          <button className='w-full sm:w-[140px] h-[36px] rounded-md bg-[#2F6CE5] font-sans flex justify-center items-center gap-[5px] font-[600] text-white'><img src={join} alt="" />Leave Group</button>
        </div>
      </div>
      <Posts />
    </div>
  )
}

export default MainContent;
