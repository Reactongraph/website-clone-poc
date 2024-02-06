import React from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const page = () => {
  const handleVideoPlay = (inView: boolean, entry) => {
    const video = entry.target;

    if (inView) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="w-screen bg-black flex flex-col md:items-center py-[4rem] overflow-hidden">
      <h2 className="font-aeonik text-white text-6xl max-md:text-2xl leading-[3.5rem] font-black uppercase md:text-center mb-[2rem] px-5">
        Revolut 10 is here
      </h2>
      <button className="bg-[#f4f4f4] w-[8.25rem] h-[2.6rem] font-medium text-black rounded-full cursor-pointer mt-[10px] mx-5">
        Check it out
      </button>
      <div className="mx-auto my-[1rem] px-5">
       <Image
          className="h-[325px] w-[62.5rem] object-contain object-center bg-transparent "
          src="/images/phone.png"
          width={1000}
          height={325}
        // fill
          alt=""
        />
      </div>
      <div className="py-[4rem]
       flex flex-col md:items-center gap-y-6 px-5">
        <h2 className="font-aeonik text-white text-6xl max-md:text-2xl leading-[3.5rem] font-black uppercase">
          Check out that card
        </h2>
        <span className="md:text-center">
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
      <div className="mx-auto my-[1rem] max-md:hidden">
      <InView as="video" autoPlay muted className="w-[40rem]" onChange={handleVideoPlay}>
        <source src="/videos/revolutCard.mp4"/>
        </InView>
      </div>
      <div className="mx-auto my-[1rem] md:hidden">
      <InView as="video" autoPlay muted className="w-[40rem]" onChange={handleVideoPlay}>
        <source src="/videos/revolut-mobileview.mp4"/>
        </InView>
      </div>
      </div>
       <div className="h-screen w-screen mx-auto relative py-[4rem]">
      <div className=" flex flex-col gap-y-6 justify-center md:items-center z-30 px-5">
        <h2 className="font-aeonik text-white text-6xl max-md:text-2xl leading-[3.5rem] font-black uppercase">360° Security</h2>
        <span className="font-aeonik text-white text-lg font-normal leading-[1.5rem]">
          We’re on the clock 24/7 monitoring and securing your money.
          <br/>
          That’s why 35+ million customers trust us to keep them safe.
        </span>
        <button className="font-aeonik bg-[#f4f4f4] w-[9rem] h-[2.6rem] font-medium text-black rounded-full cursor-pointer px-[1.5rem] py-[0.625rem] text-base z-50">
          Tell me more
        </button>
      </div>
      <div className="flex items-center justify-center">
       <img
          className="h-[40rem] w-[65rem] mx-auto  md:w-[1520px] md:object-contain object-center bg-transparent scale-150 absolute bottom-0"
          src="/images/revolut.png"
          width={1519}
          height={640}
        // fill
          alt=""
        />
        </div>
        </div>
     </div>
  );
};
export default page;
