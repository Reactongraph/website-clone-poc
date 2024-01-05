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
      <div className="py-[4rem]
       flex flex-col items-center gap-y-6">
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
      <div className="mx-auto my-[1rem]">
       <video autoPlay muted className="w-[40rem]">
        <source src="/vedios/revolutCard.mp4"/>
      </video>
      </div>
      </div>
       <div className="h-[39rem] w-[1520px] mx-auto relative py-[4rem]">
      <div className=" flex flex-col gap-y-6 items-center z-30">
        <h2 className="font-aeonik text-white text-[3.5rem] leading-[3.5rem] font-black uppercase">360° Security</h2>
        <span className="font-aeonik text-white text-lg font-normal leading-[1.5rem]">
          We’re on the clock 24/7 monitoring and securing your money.
          <br/>
          That’s why 35+ million customers trust us to keep them safe.
        </span>
        <button className="font-aeonik bg-[#f4f4f4] w-[9rem] h-[2.6rem] font-medium text-black rounded-full cursor-pointer px-[1.5rem] py-[0.625rem] text-base z-50">
          Tell me more
        </button>
      </div>
       <Image
          className="h-[40rem] w-[1520px] mx-auto object-contain object-center bg-transparent scale-150 absolute top-0"
          src="/images/revolut.png"
          width={1519}
          height={640}
        // fill
          alt=""
        />
        </div>
     </div>
  );
};
export default page;
