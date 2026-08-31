import React from 'react'
export default function HeadeeMessage({img , value = 0}) {
  return (
    <div className='bg-white p-3 rounded-full relative'>
        <span className='flex items-center justify-center bottom-8 left-8 text-[12px] bg-[#007BFF] w-5.5 h-5.5 text-white rounded-full absolute'>{value}</span>
        <img src={img} alt="" />
    </div>
  )
}
