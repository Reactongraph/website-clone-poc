import React from 'react'
import { getRevolutDetails } from "./data";

const page = () => {
  return (
    <div className=' px-4 md:px-32 flex flex-col justify-center text-left'>
    
        <h2 className="font-aeonik text-black text-[2.25rem] md:text-[3rem] leading-[2.5rem] md:leading-[3.5rem] font-black uppercase md:tracking-[-0.6px] md:text-center">
         Join the 35+ million using Revolut
        </h2>
  

    <button className="font-aeonik bg-black w-fit h-[2.6rem] font-medium text-[#f4f4f4] rounded-full cursor-pointer px-[1.4rem] py-[0.625rem] text-base leading-[1.3rem] md:mx-auto mt-10">
      Get Revolut
    </button>
 
  <div className='font-aeonik font-normal text-xs leading-[1.125rem] tracking-[0.01125rem] text-left text-[#191C1F] gap-y-12 py-28'>
  {getRevolutDetails.map((text, index) => (
  <div key={index} className='mb-6'>
    {text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        <p>{line}</p>
        
      </React.Fragment>
    ))}
  </div>
))}
  </div>
  </div>
  )
}

export default page
