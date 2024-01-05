import React from 'react'
import Image from 'next/image';
import AdventureBackgroungImg from "../../../../public/images/bgAdventure.png";
import MovingBackgroundImg from "../../../../public/images/bgMoving.png";
import TicketBackgroungImg from "../../../../public/images/bgTicket.png";
import WeddingBackgroundImg from "../../../../public/images/bgWedding.png";
import adventureCard from "../../../../public/images/adventureCard.png";
import movingCard from "../../../../public/images/movingCard.png";
import weddingCard from "../../../../public/images/weddingCard.png";
import ticketCard from "../../../../public/images/ticketCard.png";
import { useState } from 'react';

const items = [
    {
     bgImage: "adventure",
     card: adventureCard
    },
    {
        bgImage: "moving",
        card: movingCard
       },
       {
        bgImage: "ticket",
        card: ticketCard
       },
       {
        bgImage: "wedding",
        card: weddingCard
       },
]
const buttons = ["Adventure", "Wedding", "Moving", "Ticket to"]
const page = () => {

   const [index, setIndex] = useState([])
    return (
    <div className='bg-adventure bg-cover bg-center bg-no-repeat w-[100vw] h-[100vh] z-50 py-[4rem] relative'>
     
        <div className="w-[63rem] flex flex-col gap-y-6 items-center z-30 mx-auto">
        <h2 className="font-aeonik text-white text-[3rem] leading-[3.5rem] font-black uppercase tracking-[-0.6px]">Are your savings interest-ing?</h2>
        <span className="font-aeonik text-white text-lg font-normal leading-[1.5rem] px-[13rem] text-center">
        Let your money make more money with up to 4.75% AER/Gross (variable) interest on savings. Paid every single day.
         </span>
         <span className=' text-white text-xs font-normal leading-[1rem] px-[13rem] text-center'>
         AER stands for Annual Equivalent Rate and illustrates what the interest rate would be if interest was paid and compounded once each year. Gross is the interest rate without tax deducted. The interest rate is variable and subject to your selected plan. T&Cs apply.
        </span>
        <button className="font-aeonik bg-[#f4f4f4] w-[10.5rem] h-[2.6rem] font-medium text-black rounded-full cursor-pointer px-[1.5rem] py-[0.625rem] text-base leading-[1.3rem]">
          Explore Savings
        </button>
        <Image
          className=" mx-auto object-contain object-center bg-transparent "
          src="/images/adventureCard.png"
          width={400}
          height={200}
        // fill
          alt=""
        />
        <div className='flex flex-row gap-x-2'>
        {buttons.map((image, index) => (
        <button className="font-aeonik bg-[#f4f4f4] bg-opacity-20 text-[#f4f4f4] h-[2.6rem] font-medium  rounded-full cursor-pointer px-[1.5rem] py-[0.625rem] text-base leading-[1.3rem] border-2 border-white">
         {image}
        </button>
        ))}
      </div>
      </div>
    </div>
  )
}

export default page
