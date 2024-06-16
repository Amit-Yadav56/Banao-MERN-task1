import React from 'react'
import { banener } from '../assets/img'

const Banner = () => {
  return (
    <div >
      <img className='w-full h-[440px] object-cover' src={banener} alt="" />
    </div>
  )
}

export default Banner