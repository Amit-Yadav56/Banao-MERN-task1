import React from 'react'
import { Company, Dots, Location, Share, Time, Views, article1, article2, article3, user1, user2, user3 } from '../assets/img'

const Posts = () => {
  const posts = [
    {
      type: '✍️ Article',
      title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
      description: "I’ve worked in UX for the better part of a decade. From now on, I plan to reimagine...",
      views: '1.4k',
    },
    {
      type: '🔬️ Education',
      title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
      description: "I’ve worked in UX for the better part of a decade. From now on, I plan to reimagine...",
      views: '1.4k',
    },
    {
      type: '🗓️ Meetup',
      title: 'Finance & Investment Elite Social Mixer @Lujiazui',
      description: '',
      views: '1.4k',
      date: 'Fri, 12 Oct, 2018',
      location: 'Ahmedabad, India',
      linkText: 'Visit Website',
      linkUrl: '#',
    },
    {
      type: '💼️ Job',
      title: 'Software Developer',
      description: '',
      views: '1.4k',
      location: 'Innovaccer Analytics Private Ltd., Noida, India',
      linkText: 'Apply on Timesjobs',
      linkUrl: '#',
    },
  ];
  return (
    <div className='flex flex-row w-full'>
      {/* this is the section for articles and any other posts */}
      {/* this is card container */}
      <div className='w-[72%] flex flex-col gap-2'>
        {/* thsese are induvidual cards */}
        <div className='w-[692px] h-[472px]  border-[2px] border-solid border-[#E0E0E0] rounded flex flex-col'>
          <img src={article1} alt="" className='h-[220px] object-cover' />
          {/* description section */}
          <div className='m-4'>
            <p className='w-[100px] h-[25px] font-sans font-[500] text-[18px]  mb-[0.7rem]'>✍️ Article</p>
            <div className='flex flex-row justify-between'>

              <p className='w-[600px] h-[60px] font-sans font-bold leading-[29.52px] text-[22px]'>What if famous brands had regular fonts? Meet RegulaBrands!</p>
              <img src={Dots} className='size-[28px]' alt="" />
            </div>
            <p className='w-full font-sans text-[19px] mt-[0.7rem] mb-[0.9rem] text-[#5C5C5C]'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
            {/* user views and share */}
            <div className='flex items-center flex-row justify-between mt-[30px]'>
              <div className='flex items-center gap-2'>
                <img src={user1} className='size-[48px] rounded-3xl' alt="" />
                <p className='font-sans text-[18px] font-bold'>Sarthak Kamra</p>
              </div>
              <div className='flex items-center gap-[42px]'>
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
        {/* thsese are induvidual cards */}
        <div className='w-[692px] h-[472px]  border-[2px] border-solid border-[#E0E0E0] rounded flex flex-col'>
          <img src={article2} alt="" className='h-[220px] object-cover' />
          {/* description section */}
          <div className='m-4'>
            <p className='w-[150px] h-[25px] font-sans font-[500] text-[18px]  mb-[0.7rem]'>🔬️ Education</p>
            <div className='flex flex-row justify-between'>

              <p className='w-[600px] h-[60px] font-sans font-bold leading-[29.52px] text-[22px]'>Tax Benefits for Investment under National Pension Scheme launched by Government</p>
              <img src={Dots} className='size-[28px]' alt="" />
            </div>
            <p className='w-full font-sans text-[19px] mt-[0.7rem] mb-[0.9rem] text-[#5C5C5C]'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
            {/* user views and share */}
            <div className='flex items-center flex-row justify-between mt-[30px]'>
              <div className='flex items-center gap-2'>
                <img src={user2} className='size-[48px] rounded-3xl' alt="" />
                <p className='font-sans text-[18px] font-bold'>Sarah West</p>
              </div>
              <div className='flex items-center gap-[42px]'>
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
        {/* thsese are induvidual cards */}
        <div className='w-[692px] h-[490px]  border-[2px] border-solid border-[#E0E0E0] rounded flex flex-col'>
          <img src={article3} alt="" className='h-[220px] object-cover' />
          {/* description section */}
          <div className='m-4'>
            <p className='w-[95px] h-[25px] font-sans font-[500] text-[18px]  mb-[0.7rem]'>🗓️ Meetup</p>
            <div className='flex flex-row justify-between'>

              <p className='w-[600px] h-[50px] font-sans font-bold leading-[29.52px] text-[22px]'>Finance & Investment Elite Social Mixer @Lujiazui</p>
              <img src={Dots} className='size-[28px]' alt="" />
            </div>
            <div className='flex flex-row gap-[4.5rem]'>
              <div className='flex flex-row items-center gap-2 text-[15px] text-[#000000] font-bold'>
                <img src={Time} className='size-[20px]' alt="" />
                <p>Fri, 12 Oct, 2018</p>
              </div>
              <div className='flex flex-row items-center gap-2 text-[15px] text-[#000000] font-bold'>
                <img src={Location} className='w-[11.67px] h-[16.67]' alt="" />
                <p>Ahmedabad, India</p>
              </div>
            </div>
            <button className='w-full rounded-lg border-[0.7px] border-solid border-[#A9AEB8] text-[#E56135] bg-[#FFFFFF] h-[38px] my-3'>
              Visit Website
            </button>
            {/* user views and share */}
            <div className='flex items-center flex-row justify-between mt-[10px]'>
              <div className='flex items-center gap-2'>
                <img src={user3} className='size-[48px] rounded-3xl' alt="" />
                <p className='font-sans text-[18px] font-bold'>Ronal Jones</p>
              </div>
              <div className='flex items-center gap-[42px]'>
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
        {/* thsese are induvidual cards */}
        <div className='w-[692px] h-[269px]  border-[2px] border-solid border-[#E0E0E0] rounded flex flex-col'>
          {/* description section */}
          <div className='m-4'>
            <p className='w-[77px] h-[25px] font-sans font-[500] text-[18px]  mb-1'>💼️ Job</p>
          </div>
          {/* title */}
          <div className='flex flex-row justify-between'>

            <p className='w-[600px] h-[50px] font-sans font-bold leading-[29.52px] text-[22px]'>Software Developer</p>
            <img src={Dots} className='size-[28px]' alt="" />
          </div>
          {/* company and location */}
          <div className='flex flex-row gap-[4.5rem]'>
            <div className='flex flex-row items-center gap-2 text-[15px] text-[#000000] font-bold'>
              <img src={Company} className='size-[20px]' alt="" />
              <p>Innovaccer Analytics Private Ltd.</p>
            </div>
            <div className='flex flex-row items-center gap-2 text-[15px] text-[#000000] font-bold'>
              <img src={Location} className='w-[11.67px] h-[16.67]' alt="" />
              <p>Noida, India</p>
            </div>
          </div>
          <button className='w-full rounded-lg border-[0.7px] border-solid border-[#A9AEB8] text-[#E56135] bg-[#FFFFFF] h-[38px] my-3'>
            Visit Website
          </button>
          {/* user views and share */}
          <div className='flex items-center flex-row justify-between mt-[10px]'>
            <div className='flex items-center gap-2'>
              <img src={user3} className='size-[48px] rounded-3xl' alt="" />
              <p className='font-sans text-[18px] font-bold'>Ronal Jones</p>
            </div>
            <div className='flex items-center gap-[42px]'>
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
      {/* This is the section for location */}
      <div>
        Details
      </div>
    </div>
  )
}

export default Posts