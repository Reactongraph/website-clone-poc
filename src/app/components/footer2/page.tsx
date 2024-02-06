import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { planDetails, listDetails, logos, listData, footerDataDetails, footerDetails } from "./data";


const Footer = () => {

  return (
    <>
    <div className="bg-black py-[2.5rem] px-4 xl:px-[15rem] justify-center">
    <div className="bg-black max-sm:px-2 px-4 md:p-[1.5rem]">
      <h2 className="font-medium text-[2.5rem] leading-8 tracking-[0.0175rem] text-white py-[4rem]">Choose your plan</h2>
    <div className="max-w-screen xl:w-[65vw] grid max-lg:grid-cols-1 grid-cols-6 min-h-fit [&_div:nth-child(1)]:col-span-2 [&_div:nth-child(2)]:col-span-2 [&_div:nth-child(3)]:col-span-2 [&_div:nth-child(4)]:col-span-3 [&_div:nth-child(5)]:col-span-3 gap-x-[24px] gap-y-[24px] max-w-[1078px] items-center mx-auto">
    {planDetails.map(item => (

      <div className="bg-[#f7f7f7] rounded-[20px] min-w-[260px] h-[236px] px-[24px] pt-[24px] flex flex-col gap-y-[8px] relative group cursor-pointer " key={item.title}>
        <h2 className="font-medium text-[1.375rem] leading-[1.625rem] tracking-[0.01375rem] font-aeonik">
          {item.title}
        </h2>
        <h4 className="font-normal text-[1.125rem] leading-[1.5rem] font-aeonik">{item.price}</h4>
        <p className="font-inter font-normal text-base leading-[1.375rem] tracking-[0.00438rem] text-[#75808A]">
              {item.content}
        </p>
        <span className="w-[32px] h-[32px] flex items-center justify-center rounded-full absolute bottom-[20px] right-[25px] group-hover:text-white group-hover:bg-black transition-all hover:ease-in-out duration-300">
        <FaArrowRight/>
        </span>
      </div>
 ))}
    </div>
    </div>
<div className="bg-black py-20 pl-[1.3rem]">
  <p className="text-[#FFFFFF80] font-aeonik font-medium text-[1.375rem] leading-[1.625rem] tracking-[0.01375rem] py-[15px] cursor-pointer">What are you waiting for?</p>
  <p className="text-white font-aeonik font-medium text-[1.75rem] leading-[1.625rem] tracking-[0.01375rem] py-[15px] cursor-pointer ">Change the way you money</p>
  <button className="py-[10px] px-[24px] bg-[#FFFFFF] text-black text-[1rem] font-medium font-aeonik rounded-full my-[10px]">Learn more</button>
</div>
  
<div className="pl-[20px] flex flex-row flex-wrap max-w-[1000px]  gap-x-4">
  {listDetails.map((section, index) => (
    <div key={index} className={`mx-2 ${Array.isArray(section) ? 'flex-col' : 'flex-row'} h-fit `}>
      {Array.isArray(section) ? (
        section.map((subSection, subIndex) => (
          <div key={subIndex}>
            <h4 className="font-inter font-semibold text-xs leading-[1.125rem] py-[8px] tracking-[0.0075rem] text-[#FFFFFF]">
              {subSection.category}
            </h4>
            <ul className="list-none">
              {subSection.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="font-inter font-normal text-xs leading-[1.125rem] py-[8px] w-[134px] tracking-[0.01125rem] text-[#75808A] hover:cursor-pointer hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <>
          <h4 className="font-inter font-semibold text-xs leading-[1.125rem] py-[8px] tracking-[0.0075rem] text-[#FFFFFF]">
            {section.category}
          </h4>
          <ul className="list-none">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="font-inter font-normal text-xs leading-[1.125rem] py-[8px] w-[134px] tracking-[0.01125rem] text-[#75808A] hover:cursor-pointer hover:text-white "
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  ))}
</div>

<div className=" max-w-[61.5rem] py-8">
  <div className="flex justify-between">
  <h2 className="font-medium text-[1.5rem] leading-8 tracking-[0.0175rem] text-white">Revolut</h2>
  <div className="flex gap-x-4">
  {logos.map(item => (
    <Image
    key={item.src}
    src={item.src}
    width={20}
    height={20}
    alt="logo"
    className="filter invert cursor-pointer"
  />
    ))}
    </div>
    </div>
    <hr className="bg-gray-500 my-4"/>
</div>

<div className="flex relative max-sm:flex-col  max-sm:gap-y-2">
<div className="flex gap-x-2">
<Image
    src="/images/logoUnitedKingdom.svg"
    width={20}
    height={20}
    alt="logo"
    className=""
  />
  <span className="text-[#75808A] font-aeonik font-normal text-xs leading-[1.125rem] tracking-[0.01125rem] hover:cursor-pointer hover:text-white">United Kingdom</span>
  </div>
  <div>
   <ul className="flex gap-x-4  flex-wrap sm:w-[50vw] sm:absolute sm:right-0">
     {listData.map(item => (
      <li key={item} className="text-[#75808A] font-normal text-xs leading-[1.125rem] tracking-[0.01125rem] hover:cursor-pointer hover:text-white">{item}</li>
     ))}
   </ul>
   </div>
   </div>

<div className="font-aeonik font-normal text-xs leading-[1.125rem] tracking-[0.01125rem] text-left text-[#75808A] py-20">

{footerDataDetails.map(content => (
  <p key={content} className="mb-[1rem]">{content}</p>
  ))}
<div className="">
  {footerDetails.map((content, index) => (
    <div key={index} className="py-2 flex flex-row flex-wrap">
     
      <span className="hover:cursor-pointer hover:text-white underline underline-offset-1 pr-1 ">{content.heading && <span>{content.heading}:</span>}</span>
        {content.textContent.map((item: any, subIndex) => (
          <p key={subIndex}>
          <span  className="hover:cursor-pointer hover:text-white underline underline-offset-1">{item}</span>
           <span className="px-1 ">{subIndex !== content.textContent.length - 1 ? ' | ' : ''}</span>
           </p>
        ))}
     
    </div>
  ))}
</div>

</div>

</div>
</>
  );
};

export default Footer;
