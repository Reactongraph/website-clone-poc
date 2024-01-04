import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { planDetails, listDetails } from "./data";

const Footer = () => {
  return (
    <>
    <div className="bg-black py-[40px] px-[240px] justify-center">
    <div className="bg-black p-[25px]">
      <h2 className="font-medium text-[1.75rem] leading-8 tracking-[0.0175rem] text-white my-[40px]">Choose your plan</h2>
    <div className="w-[65vw] grid grid-cols-6 min-h-fit [&_div:nth-child(1)]:col-span-2 [&_div:nth-child(2)]:col-span-2 [&_div:nth-child(3)]:col-span-2 [&_div:nth-child(4)]:col-span-3 [&_div:nth-child(5)]:col-span-3 gap-x-[24px] gap-y-[24px] max-w-[1078px] items-center mx-auto">
    {planDetails.map(item => (

      <div className="bg-[#f7f7f7] rounded-[20px]  h-[236px] px-[24px] pt-[24px] flex flex-col gap-y-[8px] relative group" key={item.title}>
        <h2 className="font-medium text-[1.375rem] leading-[1.625rem] tracking-[0.01375rem] font-aeonik">
          {item.title}
        </h2>
        <h4 className="font-normal text-[1.125rem] leading-[1.5rem] font-aeonik">{item.price}</h4>
        <p className="font-inter font-normal text-base leading-[1.375rem] tracking-[0.00438rem]">
              {item.content}
        </p>
        <span className="w-[32px] h-[32px] flex items-center justify-center rounded-full absolute bottom-[20px] right-[25px] group-hover:text-white group-hover:bg-black">
        <FaArrowRight/>
        </span>
      </div>
 ))}
    </div>
    </div>
<div className="bg-black py-[10PX] pl-[20px]">
  <p className="text-[#FFFFFF80] font-aeonik font-medium text-[1.375rem] leading-[1.625rem] tracking-[0.01375rem] py-[15px] cursor-pointer">What are you waiting for?</p>
  <p className="text-white font-aeonik font-medium text-[1.75rem] leading-[1.625rem] tracking-[0.01375rem] py-[15px] cursor-pointer ">Change the way you money</p>
  <button className="py-[10px] px-[24px] bg-[#FFFFFF] text-black text-[1rem] font-medium font-aeonik rounded-full my-[10px]">Learn more</button>
</div>
    <div className="bg-red-900 pl-[20px] grid grid-cols-6 max-w-[983px] ">
  {listDetails.map((section, index) => (
    <div key={index} className="mx-2 h-fit bg-green-900">
      <h4 className="font-inter font-semibold text-xs leading-[1.125rem] py-[8px] tracking-[0.0075rem] text-[#FFFFFF]">
        {section.category}
      </h4>
      <ul className="list-none">
        {section.items.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className="font-inter font-normal text-xs leading-[1.125rem] py-[8px] w-[134px] tracking-[0.01125rem] text-[#75808A] hover:cursor-pointer hover:text-white"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

<div className="font-aeonik font-normal text-xs leading-[1.125rem] tracking-[0.01125rem] text-left text-[#75808A]">
  <p className="mb-[1rem]">
  © Revolut Ltd 2023
  </p>
<p className="mb-[1rem]">
To learn about which Revolut company serves you or if you have any questions, please contact us through our in-app chat. 
</p>
<p className="mb-[1rem]">
Revolut Ltd is registered in England and Wales (No. 08804411), 7 Westferry Circus, Canary Wharf, London, England, E14 4HD and is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 (Firm Reference 900562). Revolut Travel Ltd is authorised by the Financial Conduct Authority to undertake insurance distribution activities (FCA No: 780586). Our insurance products are arranged by Revolut Travel Ltd and Revolut Ltd, which is an appointed representative of Revolut Travel Ltd. Revolut’s stock trading products are provided by Revolut Trading Ltd (No. 832790), an appointed representative of Resolution Compliance Ltd, which is authorised and regulated by the Financial Conduct Authority.
</p>
<p className="mb-[1rem]">
Revolut Ltd is also registered with the Financial Conduct Authority to offer cryptocurrency services under the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017. Revolut's commodities service is not regulated by the Financial Conduct Authority.
</p>
<p className="mb-[1rem]">
You can read more about our Terms and Policies by clicking 
</p>
</div>
</div>
</>
  );
};

export default Footer;
