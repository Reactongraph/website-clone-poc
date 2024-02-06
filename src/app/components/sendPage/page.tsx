import React from 'react'
import { useRef } from "react";

const page = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleVideoEnded = () => {
        // Restart the video by setting currentTime to 0
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(error => console.error(error));
        }
      };

  return (
  <div className={`relative w-screen md:h-screen z-50 py-[4rem] flex justify-center items-center flex-col-reverse md:flex-row mx-auto gap-x-8`}>
       <div className="w-[400px] h-[512px]  flex justify-center items-center">
       
       <video  ref={videoRef} autoPlay muted  onEnded={handleVideoEnded} width="360" height="470" controls={false}>
         <source src="/videos/globalToo.mp4" type="video/mp4" />
        </video>
 </div>
      <div className="sm:w-[488px] h-[260px] flex flex-col gap-y-6 z-30 justify-center  text-left px-4">
        
        <h2 className="font-aeonik text-black text-[clamp(2.25rem,5vw,3rem)] leading-[2.5rem] sm:leading-[3.5rem] font-black uppercase sm:tracking-[-0.6px] text-left">
              And send across the globe too
        </h2>
        <span className="font-aeonik text-black text-lg font-normal leading-[1.5rem]  text-left">
        Whether it’s Morocco or Mexico, you can transfer there — really, really fast. Oh, and the rates are as good as you’ve heard.
        </span>
        <button className="font-aeonik bg-black w-[12.5rem] h-[2.6rem] font-medium text-[#f4f4f4] rounded-full cursor-pointer px-[1.4rem] py-[0.625rem] text-base leading-[1.3rem]">
          See how to send it far
        </button>
       
     </div>
       </div> 
  )
}
export default page