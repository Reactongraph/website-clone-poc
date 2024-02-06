"use client"
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

let items = [
  {
    heading: "Simply hit send",
    textContent: "Sending and receiving money is just as easy as texting a friend.",
    buttons: "Send",
    video: "/videos/send.mp4"
    },
  {
    heading: "Split that damn bill",
    textContent: "Be the group dinner hero — grab the bill and settle up faster than it takes to down your drink.",
    buttons: "Spilt",
    video: "/videos/split.mp4"
  },
  {
    heading: "Be the best gift-er",
    textContent: "Send them something they'll actually use — a fun gift card or good old cash. And it only takes a few seconds.",
    buttons: "Gift",
    video: "/videos/gift.mp4"
  },
];

const page = () => {

  const [currentvideoIndex, setCurrentvideoIndex] = useState(0);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
 

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedButtonIndex === null) {
      setCurrentvideoIndex((prevIndex) => (prevIndex + 1) % items.length);
       }
    }, 7000);
      return () => clearInterval(interval);
  }, [selectedButtonIndex, currentvideoIndex]);


  const heading = items[currentvideoIndex].heading;
  const textContent = items[currentvideoIndex].textContent;
  


  const handleButtonClick = (index: any) => {
    setSelectedButtonIndex(index);
    setCurrentvideoIndex(index)
    
  };

 return (
    <div className={`relative w-screen  md:h-screen z-50 py-[4rem]  flex justify-center items-center flex-col md:flex-row mx-auto gap-x-8`}>
      <div className={`sm:w-[488px] px-4 h-[260px] flex flex-col gap-y-6 z-30 justify-center text-left transition-all duration-300 ease-linear`}
    >
        <h2 className="font-aeonik text-black text-[clamp(2.25rem,5vw,3rem)] leading-[2.5rem] sm:leading-[3.5rem] font-black uppercase sm:tracking-[-0.6px] text-left">
          {heading}
        </h2>
        <span className="font-aeonik text-black text-lg font-normal leading-[1.5rem]  text-left">
        {textContent}
        </span>
        <button className="font-aeonik bg-black w-[10.5rem] h-[2.6rem] font-medium text-[#f4f4f4] rounded-full cursor-pointer px-[1.5rem] py-[0.625rem] text-base leading-[1.3rem] transition-all duration-300 ease-in-out">
          Try it out
        </button>
       </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          
          <div className="w-[400px] h-[470px]  flex justify-center items-center">
        {items.map(
        (video, index) =>
            currentvideoIndex == index  && (
            <video autoPlay muted key={index} width="360" height="420" controls={false}>
              <source src={video.video} type="video/mp4" />
             </video>
            )
              )}
              </div>
         
        <div className="flex flex-row gap-x-2">
          {items.map((image, index) => (
            <button  key={index} className={`font-aeonik  ${
             ( selectedButtonIndex !== null && selectedButtonIndex === index) ||
             currentvideoIndex === index
                ? `bg-black text-white ${(selectedButtonIndex === null) ? "btn" : ""} overflow-hidden z-50 relative`
                : `bg-white bg-opacity-20 text-black`
          } h-[2.6rem] font-medium  rounded-full cursor-pointer px-[1.5rem] py-[0.625rem] text-base leading-[1.3rem] border-2 border-black`}
            onClick={() => handleButtonClick(index)}>
              {image.buttons}
            </button>
          ))}
        </div>
       </div>
    </div>
  );
};
export default page;