import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-[100vw] bg-black flex flex-col items-center py-[4rem]">
      <h2 className="font-aeonik text-white text-[3.5rem] leading-[3.5rem] font-black uppercase text-center mb-[2rem]">
        Revolut 10 is here
      </h2>
      <button className="bg-[#f4f4f4] w-[8.25rem] h-[2.6rem] font-medium text-black rounded-full cursor-pointer mt-[10px]">
        Check it out
      </button>
      <div className="h-[20rem] w-[62.5rem] mx-auto my-[1rem]">
       <Image
          className="h-[325px] object-contain object-center bg-transparent "
          src="/images/phone.png"
          width={1000}
          height={325}
        // fill
          alt=""
        />
      </div>
      <div className="py-[4rem] bg-black flex flex-col items-center gap-y-6">
        <h2 className="font-aeonik text-white text-[3.5rem] leading-[3.5rem] font-black uppercase">
          Check out that card
        </h2>
        <span className="text-center">
        <span className="font-aeonik text-white text-lg font-normal leading-[1.5rem]  pb-[0.4rem]">
          Get the one that matches your vibe.
        </span><br/>
        <span className=" text-white text-xs font-normal leading-[1.5rem]">
          Some cards are only available on subscription plans. Fees may apply.
        </span>
        </span>
        <button className="font-aeonik bg-[#f4f4f4] w-[11rem] h-[2.6rem] font-medium text-black rounded-full cursor-pointer px-[1.3rem] py-[0.625rem] text-base">
          Choose your card
        </button>
      </div>

    </div>
  );
};
export default page;
